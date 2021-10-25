import type {NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
})

export default async function Handler(request: NextApiRequest, response: NextApiResponse){
    const {
        email,
        knowHowToPlay,
        anotherScolarship,
        ownAccount,
        occupation,
        hoursADay,
        fullName,
        age,
        city,
        turnGames,
    } = request.body

    notion.pages.create({
        parent:{
            database_id: process.env.NOTION_DATABASE_APPLY_ID || '',
        },
        properties: {
            email:{
                type: 'title',
                title: [
                    {
                        type: 'text',
                        text: {
                            content: email
                        }
                    }
                ]

            },
            knowHowToPlay: {
                type: 'rich_text',
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: knowHowToPlay
                        }
                    }
                ]
                
                
            },
            anotherScolarship: {
                type: 'rich_text',
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: anotherScolarship
                        }
                    }
                ]
                
                
            },
            ownAccount: {
                type: 'rich_text',
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: ownAccount
                        }
                    }
                ]
                
                
            },
            occupation: {
                type: 'rich_text',
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: occupation
                        }
                    }
                ]
                
                
            },
            hoursADay: {
                type: 'rich_text',
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: hoursADay
                        }
                    }
                ]
                
                
            },
            fullName: {
                type: 'rich_text',
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: fullName
                        }
                    }
                ]
                
                
            },
            age: {
                type: 'rich_text',
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: age
                        }
                    }
                ]
                
                
            },
            city: {
                type: 'rich_text',
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: city
                        }
                    }
                ]
                
                
            },
            turnGames: {
                type: 'rich_text',
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: turnGames
                        }
                    }
                ]
                
                
            }
        }
    }).then(() => {
        response.status(201).json({message:'Sucesso'})
    }).catch((error)=>{
        console.log(error)
        response.status(500).json({message:'Ops algo deu errado'})
    })
}