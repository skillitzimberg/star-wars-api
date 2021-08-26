import React from "react";

export default function PaginationControl(props) {
  return (
    <section className="pagination">
      <button
        className="page-control"
        onClick={() => props.onNewPageReq(props.paths.prev)}
      >
        {`< Previous`}
      </button>
      <button
        className="page-control"
        onClick={() => props.onNewPageReq(props.paths.next)}
      >
        {`Next >`}
      </button>
    </section>
  );
}
