import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Link from "next/link";
import {db} from "../../../prisma/db";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
export default function NovaNoticiaPage(){

    const handleSumbit = async (form: FormData) => {
        'use server'
        await db.noticias.create({
            data: {
                descricao: form.get('descricao') as string,
                titulo: form.get('titulo') as string,
                imagem: form.get('imagem') as string,
                conteudo: form.get('conteudo') as string,
            }
        })
        revalidatePath('/')
        redirect('/')
    }

    return (
        <main className={"container mx-auto px-4 py-8"}>
            <h2 className="text-4xl font-bold text-center my-5">Nova Notícia</h2>
            <form className={"max-w-3xl mx-auto rounded-lg border-2 shadow p-6"} action={handleSumbit}>
                <Input name={"titulo"} label={"Título"} />
                <Input name={"descricao"} label={"Descrição"} />
                <TextArea name={"conteudo"} label={"Conteúdo"} />
                <Input name={"imagem"} label={"URL da Imagem"} />
                <div className={"flex justify-between p-5"}>
                    <Link className="button" href={"/"}>Voltar</Link>
                    <button type={"submit"} className="button">
                        Enviar
                    </button>
                </div>
            </form>
        </main>
    )
}