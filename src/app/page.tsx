import Link from "next/link";
import {db} from "../../prisma/db";

export default async function Home() {

  const noticias = await db.noticias.findMany()

  return (
    <main className="grid gap-7 w-full px-4 py-8">
      <header className="flex flex-col items-center gap-5 justify-center w-full">
        <h1 className="font-bold text-4xl">Últimas Notícias</h1>
        <div>
          <Link className="button" href={"/nova-noticia"}>+ Nova Notícia</Link>
        </div>
      </header>
      <section className="flex justify-center flex-col items-center gap-5">
        {noticias.map(noticia => (
          <div className="max-w-7xl w-full border-2 bg-white py-4 px-8 rounded-lg shadow-md" key={noticia.id}>
            <div className="p-2">
              <h2 className="text-xl font-semibold mb-2">
                {noticia.titulo}
              </h2>
              <p className="text-gray-700 mb-4 line-clamp-2">
                {noticia.descricao}
              </p>
              <Link className="button" href={`noticia/${noticia.id}`}>Veja Mais &gt;</Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
