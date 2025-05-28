export interface userObj {
    name: string,
    email: string,
    password: string,
    isAdmin: boolean,
    emailVerify: boolean,
}

interface chapter {
    title: string,
    videos: [
        {
            videoTitle: string,
            lessonNo: string,
            videoUri: number,
            videoTiming: string
        }
    ]
}

export interface courseObj {
    user_id: string,
    title: string,
    level: string,
    description: string,
    images: [string],
    chapters: [chapter],
    totalVideosTiming: string,
    createdAt: Date,
    updatedAt: Date,
    isDeleted: boolean
}


export interface EmailTemplateProps {
    composeEmail: string;
}

export interface emailBody {
    from: string,
    to: string,
    subject: string,
}

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//     firstName,
// }) => (
//     <div>
//     <h1>Welcome, { firstName }! </h1>
//     </div>
// );