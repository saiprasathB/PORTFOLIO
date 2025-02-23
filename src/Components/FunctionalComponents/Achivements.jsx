import '../CSS/Achivements.css'

const Achivements = () => {
    return (
        <section id="Achivements">
            <h2 className="achievements-heading">Achievements</h2>
            <div className="achievements-container">
                <div className="achievement-card">
                    <h3>LeetCode</h3>
                    <p>200+ Problems Solved</p>
                    <a href="https://leetcode.com/u/saiprasath/"  className="achievement-link">
                        View Profile
                    </a>
                </div>

                <div className="achievement-card">
                    <h3>SkillRack</h3>
                    <p>1000+ Problems Solved</p>
                    <a href="https://www.skillrack.com/faces/resume.xhtml?id=411853&key=6c960a5d673ef6ad41605a710f2dcc3541bb313e"  className="achievement-link">
                        View Profile
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Achivements;
