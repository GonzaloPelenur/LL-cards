import { Container, Card, Grid, Text, Button, Row, Spacer, Badge, Col } from "@nextui-org/react";
import Image from "next/image"
import avatarImg from "../images/avatar.png"
import dinoPic from "../images/dino.jpeg"
export const config = { unstable_fastRefresh: false }
import styles from '../styles/BioCard.module.css'


// const list = [
//     {
//         title: "Photoshop",
//         img: photoshopPic,
//         price: "",
//     },
//     {
//         title: "Blender",
//         img: photoshopPic,
//         price: "",
//     }
// ];
// console.log(process.cwd())
export function BioCard(prop) {
    // console.log(data)
    const { Name, Target, Description, Deadline } = prop.data;
    var deadline_f = new Date(Deadline);
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        
        // <main className={styles.main}>
        <main>

      <link rel="stylesheet" type="text/css" href="../styles/BioCard.module.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.avatar_container}>
          <Image
                src={avatarImg}
                alt="Vercel Logo"
                width={800}
                height={800}
                className={styles.avatar}
                priority
              />
        </div>
        <div className={styles.title_container}>
          
          <p className={styles.firstName}>Victoria</p>

          <p className={styles.lastName}>Wijerathnayapa</p>
        </div>
        {/* <div className="separator"></div> */}
      </div>
      <div className={styles.bottom}>
          <div className={[styles.bio, styles.bottomSection].join(" ")}>

          {/* <div className='${styles.bottom-header bottom-text'>
            <i className="material-icons header-icon" >stream</i>
            <span className='${styles.bottom-header-text'>BIO</span>
          </div> */}
          <div className={[styles.bottomDescBio, styles.bottomText].join(" ")}>I am a sophomore at the college studying AFVS. Design enthusiast who is learning to animate.</div>
        </div>
        {/* <div className="separator"></div> */}
        
          <div className={[styles.contact, styles.bottomSection].join(" ")}>
            {/* <p className='${styles.bottom-header bottom-text'>CONTACT</p> */}
            <div className={styles.bottomText}>
              <a href='slackaccount@slack.com'>
              <div className={[styles.slack, styles.contactBox].join(" ")}>
                <i className={["material-icons", styles.myIcon].join(" ")}>fullscreen_exit</i>
                {/* <span className='${styles.slack'></span> */}
                @victoriawij
              </div>
              </a>
              <a href='mailto:johnjogndoe@gmail.com'>
              <div className={[styles.mail, styles.contactBox].join(" ")}>
                <i className={["material-icons", styles.myIcon].join(" ")}>mail</i>
                vwijerathnayapa@college.harvard.edu
              </div>
              </a>

            </div>
          </div>
          
          <div className={[styles.tools, styles.bottomSection].join(" ")}>
            <div className={[styles.bottomHeader, styles.bottomText].join(" ")}>
              <i className={["material-icons", styles.headerIcon].join(" ")}>stream</i>
              <span className={styles.bottomHeaderText}>Projects</span>
            </div>
            <div className={[styles.bottomDesc, styles.bottomText].join(" ")}>
              <ul className={[styles.bioList, styles.projList].join(" ")}>
                <a className={styles.projLink} href='proj_website'><li className={[styles.listElem, styles.projListElem].join(" ")}>Project Name</li></a>
                <a className={styles.projLink} href='proj_website'><li className={[styles.listElem, styles.projListElem].join(" ")}>Supernova</li></a>
                <a className={styles.projLink} href='proj_website'><li className={[styles.listElem, styles.projListElem].join(" ")}>Desk Model</li></a>
                <a className={styles.projLink} href='proj_website'><li className={[styles.listElem, styles.projListElem].join(" ")}>Portraits</li></a>
                <a className={styles.projLink} href='proj_website'><li className={[styles.listElem, styles.projListElem].join(" ")}>Buttons</li></a>
              </ul>
            </div>
          </div>
          <div className={[styles.projects, styles.bottomSection].join(" ")}>
            <div className={[styles.bottomHeader, styles.bottomText].join(" ")}>
              <i className={["material-icons", styles.headerIcon].join(" ")}>stream</i>
              <span className={styles.bottomHeaderText}>Tools</span>
            </div>
              <div className={[styles.bottomDesc, styles.bottomText].join(" ")}>
              <ul className={[styles.bioList, styles.toolList].join(" ")}>
              
                <li className={[styles.listElem, styles.toolListElem].join(" ")}>After Effects</li>
                <li className={[styles.listElem, styles.toolListElem].join(" ")}>xD</li>
                <li className={[styles.listElem, styles.toolListElem].join(" ")}>Blender</li>
                <li className={[styles.listElem, styles.toolListElem].join(" ")}>Illustrator</li>
                <li className={[styles.listElem, styles.toolListElem].join(" ")}>Unity</li>
                <li className={[styles.listElem, styles.toolListElem].join(" ")}>Garage Band</li>
                <li className={[styles.listElem, styles.toolListElem].join(" ")}>Photoshop</li>
              </ul>
            </div>
            
          </div>
          
        </div>
    </div>
  </main>

    );
}
