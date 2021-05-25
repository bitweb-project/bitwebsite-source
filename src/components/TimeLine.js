import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const buildTimeLineElement = (
  { author, sourceURL, text, price, date },
  index
) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#00CED1", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  black" }}
      icon={<img src="/img/menu.png" alt="skull" />}
      iconStyle={{
        background: "#00CED1",
        color: "#fff",
        display: "flex",
        padding: "10px",
      }}
      key={index}
    >
      <div className="row">
        <div className="col">
          <img src="/img/roadmap/dollarsign.png" alt="dollar price" />
          {price}
        </div>
        <div className="col">
          <img src="/img/roadmap/calendar.png" alt="calendar" />
          <span className="ml-0 ml-sm-2">{date}</span>
        </div>
        <div className="col">
          <img src="/img/roadmap/writer.png" alt="author" />
          <span className="ml-0 ml-sm-2">{author}</span>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <span className="ppc-timeline_text">&laquo; {text} &raquo;</span>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <a
            href={sourceURL}
            target="_blank"
            rel="noreferrer"
            className="ppc-timeline_source"
          >
            Source
          </a>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default function TimeLine({ orbituaries }) {
  function custom_sort(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }
  orbituaries.sort(custom_sort);

  return (
    <VerticalTimeline>
      {orbituaries.map((entry, index) => {
        return buildTimeLineElement(entry, index);
      })}
      <VerticalTimelineElement
        iconStyle={{
          background: "#00CED1",
          color: "#fff",
          display: "flex",
          padding: "13px",
        }}
        icon={<img src="/img/logo-menu-white.svg" alt="peercoin leaf" />}
      />
    </VerticalTimeline>
  );
}
