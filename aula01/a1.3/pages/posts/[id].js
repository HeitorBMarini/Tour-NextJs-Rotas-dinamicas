import {useRouter} from 'next/router';
import Link from 'next/link';

export default function Post(){
  const router = useRouter();

  console.log(router);

  return(
    <div> 
      Id do post atual :{router.query.id}

    <ul>
      <li>
      <Link href="/">
        
        Ir para página Home
      </Link>
      </li>
    </ul>
      

    </div>
  )
}
