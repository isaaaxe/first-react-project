import armyMedicImg from "../assets/army-medic.jpeg";
import jcImg from "../assets/jc-class-photo.jpeg";

export default function EducationPage() {
  return (
    <>
      <h1>Education</h1>
      <section className="sideBySide">
        <div className="education-text">
          <p>
            Studied in Raffles Institution from 2017-2022.
            <br />
            Studied PCME (Physics, Chemistry, Math, Economics) in junior college
            (2021-2022)
            <br />
            Up to this point, did not have any background in any programming
            related fields.
            <br /> H2 Computing was then not available to students of my batch,
            and I had not considered picking up programming at the time.
            <br />
          </p>
        </div>
        <div>
          <img src={jcImg} alt="jc class" className="image-ed" />
        </div>
      </section>
      <section className="sideBySide">
        <div>
          <img src={armyMedicImg} alt="amry medics" className="image-ed" />
        </div>
        <div className="education-text sideBySide">
          <p>
            Enlisted in the Singapore Armed Forces from January 2023 - November
            2024.
            <br />
            Started to pick up programming during my free time.
            <br />
            Will be matriculating into National University of Singapore in
            August 2025 and pursue a Bachelor of Computing (Honours) in Computer
            Science.
            <br />
            Currently enrolled in an NUS module, CS1010X Programming
            Methodology, which is available for returning full-time national
            service men.
            <br />
            Completed an online course available on Udemy
            <br />
            "React -The Complete Guide 2025 (incl. Next.js, Redux)"
            <br />
            Currently applying what I have learnt to creating projects
          </p>
        </div>
      </section>
    </>
  );
}
