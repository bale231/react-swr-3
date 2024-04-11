import useSWR from "swr";

function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`
  );

  function fetchGithubUser() {
    mutate();
  }

  if (username === null && username === "") {
    return {
      users: null,
      error: null,
      isLoading: false,
      onFetchUser: fetchGithubUser(),
    };
  }

  return {
    user: data,
    error,
    isLoading: !data && !error,
    onFetchUser: fetchGithubUser(),
  };
}

export default useGithubUser;
