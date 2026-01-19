import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function GetStartedPage() {
  return (
    <Layout title="Get Started" description="Start with AlphaApollo">
      <main className="container margin-vert--lg">
        <h1>Get Started</h1>
        <p>
          Install, run your first example, and get familiar with AlphaApollo. For more details, see
          the <Link to="/docs/intro">documentation</Link>.
        </p>
        <h2>Installation</h2>
        <pre>
          <code>
            {`pip install alphaapollo
# Or create a Conda environment
conda create -n alphaapollo_v2 python==3.12
conda activate alphaapollo_v2`}
          </code>
        </pre>
        <h2>Run a quick example</h2>
        <ol>
          <li>
            <Link to="/docs/intro">Read the intro</Link>
          </li>
        </ol>
      </main>
    </Layout>
  );
}
