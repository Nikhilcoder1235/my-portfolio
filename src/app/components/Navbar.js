export default function Navbar() {
  const navItems = ["🏠 Home", "👤 About", "⚙ Service", "🖼 Portfolio", "📰 News", "📧 Contact"];
  return (
    <ul>
      {navItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
