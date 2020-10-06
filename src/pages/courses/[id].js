import Head from 'next/head'
import Link from "next/link";

function Todo({data}) {
  console.log(data)
  return (
    <>
      <Head>
        <title>Micro | Random</title>
      </Head>

      <main className="container mt-12 mx-auto">
        <div className="text-3xl">{data.title}</div>
        <p>Please complete your task</p>
        <Link href="/courses"><a>Bring me to random page</a></Link>
      </main>
    </>
  )
}

Todo.getInitialProps = async (props) => {
  console.log(props);
  const {id} = props.query;
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then(json => json)

    return { data }
  } catch (error) {}
}

export default Todo
