// Wrap content in centered tailwind container

export default function Template({ children }: {
    children: React.ReactNode
  }) {
    return (
        <div className="container mx-auto flex justify-center items-center">
            {children}
        </div>
    );
  }