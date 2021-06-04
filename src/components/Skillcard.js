import React from 'react';

const SkillCard = ({ skill: { icon, title, about } }) => {
    return (
        <div className="col-lg-6">
            <div className="skill-card">
                <img src={icon} alt="icon" className="skill-card__icon" />
                <div className="skill-card-body">
                    <h6 className="skill-card__title">{title}</h6>
                    <p className="skill-card__content">{about}</p>
                </div>
            </div>
        </div>
    );
}

export default SkillCard;