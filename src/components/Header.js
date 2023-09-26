export default function Header() {
  return (
    <header className="header">
      <p className="title">calc</p>
      <div className="theme">
        <p>THEME</p>
        <div className="theme-chooser">
          <ol className="theme-chooser-number">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ol>
          <div className="theme-chooser-slider">
            <div className="theme-chooser-slider-ball"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
