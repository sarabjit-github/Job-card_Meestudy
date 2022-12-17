import React from "react";
import styles from "../styles/jobcard.module.scss";
// import { CiLocationOn, CiTimer } from "react-icons/ci";
import { MdAccessTimeFilled, MdLocationPin } from "react-icons/md";

export const JobCard = () => {

    // for complete styling like if job desc words(including spaces) more than 180 characters then trim it
    let jobDesc = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugit quas veniam quaerat quis cupiditate, voluptates sunt similique quo sapiente dignissimos recusandae! Quam consequuntur dolores possimus beatae, corrupti ipsam ducimus!`;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.left}>
        <h3>ReactJs Developer</h3>
        <div className={styles.descWrapper}>
            <p>{`${jobDesc.slice(0, 180)}...`}</p>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.locationWrapper}>
            <MdLocationPin />
            <span>Hoshiarpur, Punjab</span>
          </div>
          <div className={styles.timeWrapper}>
            <MdAccessTimeFilled />
            <span>2 days ago</span>
          </div>
        </div>
        <div className={styles.countWrapper}>
            No. of Vaccancies: <span>10</span>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.stipendWrapper}>
            <span>Stipend</span>
            <h5>Rs. 25,000</h5>
        </div>
        <button className="btnPrimary btn--large">View Job</button>
      </div>
    </div>
  );
};
