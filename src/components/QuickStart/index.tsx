import React, {useState} from 'react';
import clsx from 'clsx';
import {Highlight, themes} from 'prism-react-renderer';
import styles from './styles.module.css';

export interface QuickStartProps {
  className?: string;
}

const installCommand = `conda create -n alphaapollo python==3.12 -y
conda activate alphaapollo

git clone https://github.com/tmlr-group/AlphaApollo.git
cd AlphaApollo

bash installation.sh`;

const demoExamples = [
  {
    title: 'Agentic Reasoning (Tool)',
    language: 'bash',
    code: 'bash examples/generation/run_generation_informal_math_tool.sh',
  },
  {
    title: 'Agentic Learning (Multi-turn GRPO)',
    language: 'bash',
    code: 'bash examples/grpo/run_grpo_informal_math_tool.sh',
  },
  {
    title: 'Agentic Evolution',
    language: 'bash',
    code: `# Before running the self-evolution scripts, make sure to serve the corresponding number of models.
python utils/ray_serve_llm.py --model_path <model_path> --gpus <gpus> --port <port> --model_id <model_id>

bash examples/evolving/run_vllm_informalmath_evolving.sh`,
  },
];

const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Copy failed', err);
    return false;
  }
};

function CodeBlock({code, language}: {code: string; language: string}) {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Highlight
      theme={isDark ? themes.vsDark : themes.github}
      code={code}
      language={language as any}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={clsx(styles.code, className)} style={style}>
          <code>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token})} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
}

export default function QuickStart({className}: QuickStartProps) {
  const [activeDemo, setActiveDemo] = useState(0);
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [copiedDemo, setCopiedDemo] = useState(false);

  const handleCopyInstall = async () => {
    const ok = await copyToClipboard(installCommand);
    setCopiedInstall(ok);
    setTimeout(() => setCopiedInstall(false), 1500);
  };

  const handleCopyDemo = async () => {
    const ok = await copyToClipboard(demoExamples[activeDemo].code);
    setCopiedDemo(ok);
    setTimeout(() => setCopiedDemo(false), 1500);
  };

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>Quick Start</h2>

        <div className={styles.section}>
          <h3 className={styles.subtitle}>Installation</h3>
          <div className={styles.codeBox}>
            <div className={styles.codeHeader}>
              <span className={styles.language}>bash</span>
              <button
                type="button"
                aria-label="Copy installation command"
                className={styles.copyButton}
                onClick={handleCopyInstall}>
                {copiedInstall ? 'Copied' : 'Copy'}
              </button>
            </div>
            <CodeBlock code={installCommand} language="bash" />
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subtitle}>Demo Programs</h3>
          <div className={styles.demoTabs}>
            {demoExamples.map((example, idx) => (
              <button
                key={example.title}
                className={clsx(styles.demoTab, idx === activeDemo && styles.activeDemoTab)}
                onClick={() => setActiveDemo(idx)}
                type="button">
                {example.title}
              </button>
            ))}
          </div>
          <div className={styles.codeBox}>
            <div className={styles.codeHeader}>
              <span className={styles.language}>{demoExamples[activeDemo].language}</span>
              <button
                type="button"
                aria-label="Copy demo command"
                className={styles.copyButton}
                onClick={handleCopyDemo}>
                {copiedDemo ? 'Copied' : 'Copy'}
              </button>
            </div>
            <CodeBlock code={demoExamples[activeDemo].code} language={demoExamples[activeDemo].language} />
          </div>
        </div>
      </div>
    </div>
  );
}
