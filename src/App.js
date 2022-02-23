import React, {useEffect} from 'react';

import './App.css';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import space from './space.jpg';
import moonImg from './moon.jpg';
import planetImg from './planet.jpg';

function App() {

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild( renderer.domElement );
    camera.position.setZ(30);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0xFF6347,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    const controls = new OrbitControls(camera, renderer.domElement);

    const addStar = () => {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({color: 0xffffff});
      const star = new THREE.Mesh(geometry, material);
      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
      star.position.set(x, y, z);
      scene.add(star);
    };

    Array(200).fill().forEach(addStar);

    const spaceTexture = new THREE.TextureLoader().load(space);
    scene.background = spaceTexture;

    const planetTexture = new THREE.TextureLoader().load(planetImg);
    const planet = new THREE.Mesh(
        new THREE.SphereGeometry(3, 32, 32),
        new THREE.MeshStandardMaterial({
          map: planetTexture,
        }),
    );
    scene.add(planet);

    const moonTexture = new THREE.TextureLoader().load(moonImg);
    const moon = new THREE.Mesh(
        new THREE.SphereGeometry(3, 32, 32),
        new THREE.MeshStandardMaterial({
          map: moonTexture,
        }),
        );
    scene.add(moon);
    moon.position.z = 20;
    moon.position.setX(-10);

    const moveCamera = () => {
      const t = document.body.getBoundingClientRect().top;
      moon.rotation.x += 0.05;
      moon.rotation.y += 0.075;
      moon.rotation.z += 0.05;

      planet.rotation.y += 0.01;
      planet.rotation.z += 0.01;

      camera.position.z = t * -0.01;
      camera.position.x = t * -0.0002;
      camera.position.y = t * -0.0002;
    };

    document.body.onscroll = moveCamera;

    const animation = () => {
      requestAnimationFrame(animation);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;
      controls.update();
      renderer.render(scene, camera);
    };
    animation();
  }, []);

  return (
      <>
      <canvas id="bg"/>
  <main>

    <header>
      <h1>Katrin Zaks</h1>
      <p>🚀 Welcome to my website!</p>
    </header>


    <blockquote>
      <p>Frontend Web Developer (JS, TS, React, Redux) with 4 years experience</p>
    </blockquote>

    <section>
      <h2>📜 Skills</h2>
      <div className="skills-container">
        <div className="skills">
          <div className="skill-container">
            <span className="skill">React/Redux</span>
            <span className="skill">⭐⭐⭐⭐⭐</span>
          </div>
          <div className="skill-container">
            <span className="skill">React Native</span>
            <span className="skill">⭐⭐⭐⭐⭐</span>
          </div>
          <div className="skill-container">
            <span className="skill">HTML5</span>
            <span className="skill">⭐⭐⭐⭐⭐</span>
          </div>
          <div className="skill-container">
            <span className="skill">CSS3</span>
            <span className="skill">⭐⭐⭐⭐⭐</span>
          </div>
          <div className="skill-container">
            <span className="skill">LESS/SASS</span>
            <span className="skill">⭐⭐⭐⭐⭐</span>
          </div>
          <div className="skill-container">
            <span className="skill">Bootstrap based frameworks</span>
            <span className="skill">⭐⭐⭐⭐⭐</span>
          </div>
          <div className="skill-container">
            <span className="skill">BEM</span>
            <span className="skill">⭐⭐⭐⭐⭐</span>
          </div>
        </div>
        <div className="skills">
          <div className="skill-container">
            <span className="skill">JavaScript ES6+</span>
            <span className="skill">⭐⭐⭐⭐⭐</span>
          </div>
          <div className="skill-container">
            <span className="skill">TypeScript</span>
            <span className="skill">⭐⭐⭐⭐⭐</span>
          </div>
          <div className="skill-container">
            <span className="skill">Nodejs</span>
            <span className="skill">⭐⭐⭐</span>
          </div>
          <div className="skill-container">
            <span className="skill">Python</span>
            <span className="skill">⭐⭐</span>
          </div>
          <div className="skill-container">
            <span className="skill">Git</span>
            <span className="skill">⭐⭐⭐⭐⭐</span>
          </div>
          <div className="skill-container">
            <span className="skill">Agile</span>
            <span className="skill">⭐⭐⭐⭐⭐</span>
          </div>
          <div className="skill-container">
            <span className="skill">Windows</span>
            <span className="skill">⭐⭐⭐⭐⭐</span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>👩🏽‍🚀 Experience</h2>
      <h3>Frontend Developer</h3>
      <h4>ToBe Influencing Innovation</h4>
      <h5>Mar 2021 - present</h5>
      <h5>Israel</h5>
      <p>
        First frontend developer, developing Web dashboard with latest React/Redux technologies, developing React Native applications and backend with Firebase and Nodejs.
        Areas of responsibilities: frontend development, backend development with Firebase, QA, logic architecture per feature, fixing problems.
      </p>
      <p>
        Technologies: React, Redux, React Native, JavaScript ES6+, TypeScript, Nodejs, HTML5, CSS3, SASS, Bootstrap, MaterialUI, Firebase (Firestore, Realtime database, Cloud functions), BLE, headless, react-native-geolocation.
      </p>
      <p>
        Process organization technologies: git, GitHub, Agile, Monday.
      </p>

      <h3>Software developer</h3>
      <h4>Ludus Technologies Ltd</h4>
      <h5>Oct 2020 - Feb 2021</h5>
      <h5>Israel</h5>
      <p>
        (Startup closed) Worked as first frontend developer, developed UI/UX infrastructure with latest React/Redux technologies, developed REST API endpoints with Nodejs and TypeScript.
        Areas of responsibilities: building and maintaining clean and readable code, participating in code review; building and developing responsive UI layouts; adding and testing new features, fixing problems.
      </p>
      <p>
        Technologies: React, Redux, JavaScript ES6+, TypeScript, Nodejs, HTML5, CSS3, SASS, Bootstrap, CoreUI.
      </p>
      <p>
        Process organization technologies: git, GitHub, Jira, Bitbucket.
      </p>

      <h3>Frontend React developer</h3>
      <h4>Optisor LTD</h4>
      <h5>Sep 2019 - Sep 2020</h5>
      <h5>Israel</h5>
      <p>
        Developed UX/UI for web (React) and mobile (React-Native) platforms.
        Areas of responsibilities: building and maintaining code, participating in code review; building and developing responsive UI layouts; adding and testing new features, fixing problems; code deployment.
      </p>
      <p>
        Technologies: JavaScript ES6+, TypeScript, React, Redux, React-Native, Expo, React-Navigation, HTML5, CSS3, LESS, SASS, Bootstrap, Material UI.
      </p>
      <p>
        Process organization technologies: git, GitHub, Scrum, pair-programming, Trello.
      </p>

      <h3>Frontend Web developer</h3>
      <h4>Orange-Apple LLP</h4>
      <h5>2016 - 2018</h5>
      <h5>Kazakhstan</h5>
      <p>
        Developed web pages for KPIs control for companies that participated in business games oriented to improving KPIs of their employees through inserting gameplay elements in non-gaming settings. User-friendly interfaces to communicate, comment, inform, reward each other and track the progress.
        Areas of responsibilities: developing reusable front-end components and points-based features; creating landing pages; collaborating with designers; personal project management from start to finish; communication with the customers.
      </p>
      <p>
        Technologies: JavaScript, React, Redux, HTML5, CSS3, Bootstrap, WordPress.
      </p>
      <p>
        Process organization technologies: git, Kanban-board.
      </p>

      <h2>🏆 Education</h2>

      <h3>Bachelor's degree, Telematics</h3>
      <h4>Kazakh-German University</h4>
      <h5>2012 - 2016</h5>
      <h5>Kazakhstan</h5>

      <h3>MBA</h3>
      <h4>Ariel University</h4>
      <h5>2021 - present</h5>
      <h5>Israel</h5>

    </section>

    <blockquote>
      <p>To think and to do are different things </p>
    </blockquote>

    <section className="left">
      <h2>🌮 Interests</h2>
      <div className="interests-container">
        <span className="interest">📸 Photography</span>
        <span className="interest">🏐 Volleyball</span>
        <span className="interest">🏊‍♀️ Swimming</span>
        <span className="interest">🧘‍♀️ Yoga</span>
        <span className="interest">🏃‍♀️ Jogging</span>
        <span className="interest">🗺️ Travelling</span>
        <span className="interest">📚 Reading</span>
        <span className="interest">🌏 Languages</span>
        <span className="interest">📱 Soldering</span>
      </div>

    </section>

    <blockquote>
      <p>Thanks for watching!</p>
    </blockquote>


  </main>
        </>
  );
}

export default App;
