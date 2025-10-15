import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for design</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Figma</span>
            <span className="chip">Adobe XD</span>
            <span className="chip">Sketch</span>
            <span className="chip">Miro</span>
            <span className="chip">Scrum</span>
            <span className="chip">WebFlow</span>
            <span className="chip">Adobe Illustrator</span>
            <span className="chip">Html & CSS</span>
            <span className="chip">GitLab</span>
            <span className="chip">Bootstrap</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
