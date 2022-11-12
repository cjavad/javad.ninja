export default function Head({ title }: { title: string }) {
    return (
        <head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </head>
    )
}