import React from "react";

function index({ note }) {
  return <div>hello note {note.title}</div>;
}

export default index;

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`);

  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: "/notes" });
    res.end();
    return { props: {} };
  }
  const { data } = await response.json();

  if (data) {
    return {
      props: { note: data },
    };
  }
}
