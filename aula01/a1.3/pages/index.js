import Link from "next/link"

function HomePage() {
    return <div> Welcome to Next JS!

    <h2> Foto do Dev:</h2>

    <img src="/images/avatar.jpeg"/>

  <ul>
      <li>
      <Link href="/sobre">
        
        Ir para página Sobre
      </Link>
      </li>
    </ul>



    </div>
}

export default  HomePage
