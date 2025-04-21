import "./App.css";

function App() {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src="/profile.jpg" alt="Profile" className="profile-avatar" />
        <h1>张三</h1>
        <h2>前端开发工程师</h2>
      </div>

      <div className="profile-content">
        <p>5年React开发经验，专注于构建高性能Web应用</p>

        <div className="skills">
          <span className="skill-tag">React</span>
          <span className="skill-tag">TypeScript</span>
          <span className="skill-tag">Node.js</span>
        </div>

        <div className="contact">
          <a href="mailto:example@example.com">example@example.com</a>
          <a href="tel:+8613800138000">+86 13800138000</a>
        </div>
      </div>
    </div>
  );
}

export default App;
