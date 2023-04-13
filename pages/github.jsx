import { formatDistance } from 'date-fns';
import { Frown, GitBranch } from 'react-feather';
import GitHubCalendar from 'react-github-calendar';
import useSWR, { SWRConfig } from 'swr';
import useDarkMode from 'use-dark-mode';

import { Colors, OuterPadding } from '../lib/constants';

function Repo(props) {
  return (
    <div style={{ marginBottom: `calc(${OuterPadding} / 1.25)` }}>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <a href={props.data.html_url} target="_blank">
          {props.data.name}
        </a>
        {props.data.fork && <GitBranch alt="fork" style={{ marginLeft: 8 }} />}
        <span style={{ marginLeft: 8, fontSize: '0.7em' }}>(Pushed {formatDistance(new Date(props.data.pushed_at), new Date())} ago)</span>
      </div>
      <div>{props.data.description}</div>
    </div>
  );
}

function Repos({ page }) {
  const { data, error } = useSWR(`https://api.github.com/users/amcolash/repos?sort=pushed&per_page=100&page=${page}`);

  if (error || data?.message)
    return page === 1 ? (
      <div style={{ display: 'flex' }}>
        Looks like we can't access the Github API right now <Frown style={{ marginLeft: 10 }} />
      </div>
    ) : null;
  if (!data) return page === 1 ? <div>Loading...</div> : null;

  return data.map((r) => <Repo data={r} key={r.id} />);
}

function RepoHeader() {
  const { data } = useSWR(`https://api.github.com/users/amcolash`);
  return <h3>My Repositories {data && !data.message && `(${data.public_repos}`}</h3>;
}

export default function Github() {
  const darkMode = useDarkMode();

  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
          if (retryCount > 1) return;
        },
      }}
    >
      <div>
        <h3>My Contributions</h3>
        <GitHubCalendar
          username="amcolash"
          colorScheme={darkMode.value ? 'dark' : 'light'}
          theme={{
            dark: ['#444', '#216e39'],
            light: ['#ccc', '#216e39'],
          }}
          style={{ marginBottom: 40, padding: '1rem', border: '1px solid #888', borderRadius: 5 }}
        />

        {/* Get all repositories. Since I am not at 200 total yet, this will be more than sufficient for now */}
        <RepoHeader />
        {[1, 2].map((page) => (
          <Repos page={page} key={page} />
        ))}
      </div>
    </SWRConfig>
  );
}
