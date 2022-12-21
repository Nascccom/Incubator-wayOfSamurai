export type PostType = {
    id: number
    post: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
    userAvatar: string
}
export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: PostType[]
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
}
export type SideBarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SideBarType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, post: 'Hi, I am a new user this social network', likesCount: 5},
            {id: 2, post: 'Hi, How are you?', likesCount: 20},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Nastya', userAvatar: 'https://bipbap.ru/wp-content/uploads/2017/08/0-70.jpg'},
            {id: 2, name: 'Katya', userAvatar: 'https://mobimg.b-cdn.net/v3/fetch/68/684eac9aeb30fffb10f835fa65324c10.jpeg'},
            {id: 3, name: 'Valera', userAvatar: 'https://storage.yandexcloud.net/stage01-metronews-transfer/media/20220618/13/20/858x540_60e21547_dvindb8d.jpg'},
            {id: 4, name: 'Andrey', userAvatar: 'https://gazeta.spb.ru/wp-content/uploads/2021/09/111.jpg'},
            {id: 5, name: 'Sveta', userAvatar: 'https://images.eksmo.ru/upload/iblock/b34/cat-_1_.png'},
            {id: 6, name: 'Artem', userAvatar: 'https://pic.rutubelist.ru/user/64/bb/64bba456c67632db637aaa2c1724e05c.jpg'},
            {id: 7, name: 'Stepan', userAvatar: 'https://vokrug.tv/pic/news/a/1/2/b/a12b301f89741718c5b88217e0af492c.jpeg'},
        ],
        messages: [
            {id: 1, message: 'Hello! How are you?'},
            {id: 2, message: 'I love you!'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'My name is...'},
            {id: 5, message: 'Fine'},
            {id: 6, message: 'Good job'},
        ],
    },
    sidebar: {}
}

export default state;