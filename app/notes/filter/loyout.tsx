import SidebarNotes from "./@sidebar/SidebarNotes";

export default function NotesFilterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>

      <SidebarNotes />

      <main style={{ flex: 1, padding: "1rem" }}>{children}</main>
    </div>
  );
}






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