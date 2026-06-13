import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Media from "./components/Media";



function App() {
    useEffect(() => {
    const elements = document.querySelectorAll(".card, .media");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Section className="section--team" layout="text-right">
          <div className="section__head">
            <span className="icon-box">
              <i className="fi fi-sr-users-alt" />
            </span>
            <h2 className="heading">ABOUT THE TEAM</h2>
            <span className="underline" />
          </div>

          <div className="card">
            <p>
              We are a small team of three people (a developer, a 3D artist and a sound designer) and we want to build an horror/stealth game using Unreal Engine 5 to publish on Steam and Itch.io but right now we don’t have budget. We work remotely, so is not possible for us to meet and we need to share to each other the progress of the project. We were using Diversion and we were doing well but the free plan expired and we can’t afford the base subscription. We are not monitizing yet on this game because is still in early stage developement and we need to work on the project
            </p>
          </div>
        </Section>
        <Section className="section--game" layout="text-left">
          <div className="card">
            <p>
            The game is is a first-person psychological horror and management simulation where the player controls Joe a socially isolated, psychologically fractured butcher who runs a grease-stained burger restaurant. By day, Joe flips patties, takes orders, and maintains a veneer of normalcy. By night and sometimes behind closed doors during business hours Joe evaluates customers, selects targets, and eliminates them, converting their remains into off-book meat supply.
            The game lives in the tension between two modes: the mundane rhythm of restaurant operations and the creeping horror of Joe's predatory impulse. Neither mode is safe. A busy lunch rush can collapse into panic. A quiet night hunt can spiral into a police chase. The player must hold both worlds together or watch them fall apart.
            </p>
          </div>

          <div className="section__head section__head--right">
            <span className="icon-box">
              <i className="fi fi-sr-gamepad" />
            </span>
            <h2 className="heading">ABOUT THE GAME</h2>
            <span className="underline underline--right" />
          </div>
        </Section>
        <div className="section__head section__head--center">
          <span className="icon-box">
            <i className="fi fi-sr-list-check" />
          </span>
          <h2 className="heading">DETAILS OF THE GAMEPLAY</h2>
          <span className="underline underline--center" />
        </div>
        <Section className="section--loop" layout="media-left">
          <Media type="image" src="/media/gameplay.png" alt="Core gameplay" />

          <div className="card card--text">
            <h3 className="subheading">
              CORE GAMEPLAY <span className="red">LOOP</span>
            </h3>
            <p>
                Each in-game day is divided into phases. The loop repeats with escalating difficulty and complexity across a days-based progression system.
            </p>
            <ul className="bullets">
              <li>
                <span className="red bold">Serve Customers:</span> Take orders,
                prepare burgers, maintain satisfaction. Primary income loop.
              </li>
              <li>
                <span className="red bold">Observe &amp; Analyse:</span> Study
                customer behaviour. Log notes. Build psychological profiles on
                potential targets.
              </li>
              <li>
                <span className="red bold">Sanity Management:</span> Monitor the
                sanity meter. Low sanity warps perception; high sanity requires
                active maintenance.
              </li>
              <li>
                <span className="red bold">Target Selection:</span> Choose a
                victim based on psychological match score and risk assessment.
              </li>
              <li>
                <span className="red bold">Execution Phase:</span> Stealth-based
                kidnap / elimination. Avoid witnesses and active police patrols.
              </li>
              <li>
                <span className="red bold">Butchering &amp; Resource:</span>
                Convert victim into off-book meat supply. Manage yield, disposal,
                and evidence.
              </li>
              <li>
                <span className="red bold">Avoid Detection:</span> Clean
                evidence, manage police suspicion meter, maintain normal
                operational cover.
              </li>
            </ul>
          </div>
        </Section>
        <Section className="section--restaurant" layout="media-right">
          <div className="card card--text">
            <h3 className="subheading">
              <span className="red">RESTAURANT</span> MANAGEMENT
            </h3>
            <p>
              The restaurant layer is the game's surface and its primary cover. It
              must feel functional and even satisfying the contrast between
              competent burger-flipping and Joe's interior life is intentional.
              Each order has a ticket: patty type, toppings, bun, cook level.
              Player must match all correctly within a time window. Speed and
              accuracy drive the customer satisfaction score. Satisfaction affects
              income and, indirectly, community suspicion. The sanity meter is the
              game's psychological spine. It does not operate as a simple health
              bar it shapes what the player perceives but we have to implement
              this mechanic yet.
            </p>
          </div>

          <Media type="video" src="/media/restaurant.mp4" />
        </Section>
        <Section className="section--stealth" layout="media-left">
          <Media type="video" src="/media/stealth.mp4" />

          <div className="card card--text">
            <h3 className="subheading">
              STEALTH AND <span className="red">CHASING SYSTEM</span>
            </h3>
            <p>
              The execution phase triggers outside normal restaurant gameplay (in
              the back alley, the basement, or during off-hours). It is not an
              action sequence. It is a stealth sequence defined by patience,
              timing, and noise control. The Police Meter is a zone-wide threat
              indicator. It rises and falls based on Joe's actions and the passage
              of in-game time. It operates independently from Joe's personal
              exposure — it reflects how actively the area is being policed. Your
              action condition the sanity meter but we are working on that.
            </p>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <span>contacts: randazzotony1@gmail.com</span>
      </footer>
    </div>
  );
  
}

export default App;
