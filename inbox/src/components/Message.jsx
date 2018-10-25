import React from 'react'



const Message = ({sub, starred, read, selected, labels,starToggle, id}) => {
  const starredClasses = starred ? "star fa fa-star" : "star fa fa-star-o"
  const messageRead = read ? " read" : " unread"
  const selectedClass = selected ? " selected" : ""
  const spans = labels.map((label, i) => {
    return <span key={i} className="label label-warning">{label}</span>
  })
    return (
        <div className={"row message" + messageRead + selectedClass}>
          <div class="col-xs-1">
            <div class="row">
              <div class="col-xs-2">
                <input type="checkbox" defaultChecked={selected} />
              </div>
            <div class="col-xs-2">
                <i className={starredClasses} onClick={() => starToggle(id)}></i>
            </div>
        </div>
        </div>
            <div class="col-xs-11">
              {spans}
              <a href="#">
                {sub.subject}
              </a>
           </div>
         </div>
    )
}

export default Message
