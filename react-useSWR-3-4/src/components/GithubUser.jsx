import React from "react";
import { Link } from "react-router-dom";
import useGithubUser from "../hooks/useGithubUser";
import Card from "react-bootstrap/Card";

function GithubUsers() {
  const { user, error, isLoading, onFetchUser } = useGithubUser("bale231");

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error === null ? (
        <>
          <h1 className="text-danger">404</h1>
          <h3>API not worked, retry again.</h3>
        </>
      ) : (
        ""
      )}
      {user && (
        <Card className="w-25">
          <Card.Img variant="top" src={user.avatar_url} />
          <Card.Body>
            <Card.Title>{user.login}</Card.Title>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.bio}</Card.Text>
          </Card.Body>
        </Card>
      )}
      <button className="ruonded" onClick={onFetchUser}>
        Refresh API
      </button>
      <button>
        <Link className="text-decoration-none" to="/">
          Back to home
        </Link>
      </button>
    </>
  );
}

export default GithubUsers;
