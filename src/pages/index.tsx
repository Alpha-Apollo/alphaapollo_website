import EnvironmentShowcase from '@site/src/components/EnvironmentShowcase';
import Hero from '@site/src/components/Hero';
import InstallBox from '@site/src/components/InstallBox';
import QuickStart from '@site/src/components/QuickStart';
import Layout from '@theme/Layout';
import { ReactNode } from 'react';
import styles from './index.module.css';


const features = [
  {
    icon: '🧠',
    title: 'Multi-turn Agentic Reasoning',
    description: 'Iterative model-environment interaction with dynamic memory and tool-augmented reasoning for complex problem-solving.',
  },
  {
    icon: '📚',
    title: 'Multi-turn Agentic Learning',
    description: 'Per-turn reward assignment and policy updates with masked non-model outputs for continuous learning and adaptation.',
  },
  {
    icon: '🔄',
    title: 'Multi-round Agentic Evolution',
    description: 'Propose-judge-update evolutionary loop with long-term memory to prevent errors and promote efficient strategies.',
  },
];

const solutions = [
  {
    name: 'Agentic Reasoning',
    image: '/img/agentic_reasoning.jpg',
    description: 'Multi-turn agentic reasoning through an iterative cycle of model reasoning, tool execution, and environment feedback.',
    link: '/multi-turn-agentic-reasoning',
  },
  {
    name: 'Agentic Learning',
    image: '/img/agentic_learning.jpg',
    description: 'Stable agentic learning via turn-level optimization that decouples model generations and environmental feedback.',
    link: '/multi-turn-agentic-learning',
  },
  {
    name: 'Agentic Evolution',
    image: '/img/agentic_evolution.jpg',
    description: 'Multi-round agentic evolution through a propose-judge-update evolutionary loop with long-term memory.',
    link: '/multi-round-agentic-evolution',
  },
];

const codeExamples = [
  {
    title: 'Agentic Reasoning',
    language: 'python',
    code: `import alphaapollo

# Initialize the model agent
agent = model()

# Load a problem (Easy)
problem = load_data(PATH)

# Perform inference with tools enabled
reasoning_traj = agent.inference(problem, tool=True)
print(reasoning_traj)`,
  },
  {
    title: 'Agentic Evolution',
    language: 'python',
    code: `import alphaapollo

# Initialize the model agent
agent = model()

# Load a problem (Hard)
problem = load_data(PATH)

# Evolving process with tools
reasoning_traj = agent.evolving(problem, tool=True)
print(reasoning_traj)`,
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="AlphaApollo"
      description="AlphaApollo: RL training framework for LLMs">
      <main>
        <div className={styles.container}>
          <Hero
            title="AlphaApollo"
            description="A System for Deep Agentic Reasoning"
            primaryButtonText="Paper"
            primaryButtonLink="https://arxiv.org/abs/2510.06261"
            secondaryButtonText="GitHub"
            secondaryButtonLink="https://github.com/tmlr-group/AlphaApollo"
          />

          <EnvironmentShowcase
            title="Key Features"
            environments={solutions}
            background="gray"
          />

          <QuickStart />
        </div>
      </main>
    </Layout>
  );
}
