import React from 'react'



const Message = ({sub, starred, read, selected}) => {
  const starredClasses = starred ? "star fa fa-star" : "star fa fa-star-o"
  const messageRead = read ? "row message read" : "row message unread"
  const selectedClass = selected ? " selected" : ""
    return (
        <div className={messageRead + selectedClass}>
          <div class="col-xs-1">
            <div class="row">
              <div class="col-xs-2">
                <input type="checkbox" defaultChecked={selected} />
              </div>
            <div class="col-xs-2">
                <i className={starredClasses}></i>
            </div>
        </div>
        </div>
            <div class="col-xs-11">
             <a href="#">
               {sub.subject}
             </a>
           </div>
         </div>
    )
}

export default Message
