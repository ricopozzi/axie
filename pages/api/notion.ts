import type {NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
})

export default async function Handler(request: NextApiRequest, response: NextApiResponse){
    const { nome, email, tel } = request.body
    
    await notion.pages.create({
        parent:{
            database_id: process.env.NOTION_DATABASE_ID|| '',
        },
        properties: {
            name:{
                type:'title',
                title: [
                    {
                        type: 'text',
                        text: {
                            content: nome,
                        }
                    }
                ]

            },
            email:{
                type: 'email',
                email:email
            },
            telefone: {
                type: 'phone_number',
                phone_number: tel
            }
        }
    }).then(() => {
        response.status(201).json({message:'Sucesso'})
    }).catch((error)=>{
        console.log(error)
        response.status(500).json({message:'Ops algo deu errado'})
    })
}