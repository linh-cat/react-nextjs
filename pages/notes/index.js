import React from "react";
import Link from "next/link";
function index({notes}) {
  return <div>
      <h1>My Notes</h1>
      <div style={{display:"flex", margin: "5px"}}>
        {notes.map(note => (
         <div>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a>
                <div>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link> 
         </div> 
        ))}
      </div>
      </div>;
}

export default index;

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/note/`)
  const {data} = await res.json()
  console.log(data)

  return {
    props: {notes: data}
  }
}
