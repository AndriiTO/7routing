

type NotesLayoutProps = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: NotesLayoutProps) => {
  return (
    <section>
      <aside>{sidebar}</aside>
      <div>{children}</div>
    </section>
  );
};

export default NotesLayout;






// export default function NotesLayout({
//     children,}: Readonly<{ children: React.ReactNode }>) {
//     return (
//        <div className="sidebar 
//        display: flex;
//        gap 20px;">
//             {/* sidebar */}
//             {children}
//         </div>
//     );
// }