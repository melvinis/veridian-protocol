export default function DataRoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: "100vh", background: "#05050f" }}>
      {children}
    </div>
  );
}
