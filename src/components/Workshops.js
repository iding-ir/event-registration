import React from "react";
import * as classnames from "classnames";

import "./Workshops.scss";
import User from "./User";

const Workshop = (props) => {
  const { data, step, current, addToWorkshops, removeUser } = props;

  if (!current.type) {
    return "";
  }

  const { workshops, event_currency } = data;

  const { workshops: currentWorkshops } = current;

  const classes = classnames("workshops", {
    show: step === 2,
  });

  return (
    <div className={classes}>
      <div className="current">
        <User data={data} current={current} removeUser={removeUser} />
      </div>

      <div className="list">
        <h5>Workshops</h5>

        {workshops.map((workshop) => {
          const {
            event_workshop_title,
            event_workshop_price,
            event_workshop_id,
          } = workshop;

          return (
            <div className="workshop sc-row" key={event_workshop_id}>
              <div className="name sc-col-xs-12 sc-col-sm-8">
                {event_workshop_title}
              </div>

              <div className="controls sc-col-xs-12 sc-col-sm-4">
                ({currentWorkshops.length}) {event_workshop_price}{" "}
                {event_currency}
                <span className="add" onClick={() => addToWorkshops(workshop)}>
                  +
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Workshop;
