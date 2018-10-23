import React from 'react'



const Message = ({sub, starToggle}) => {
    return (
        <div class="row message unread">
          <div class="col-xs-1">
            <div class="row">
              <div class="col-xs-2">
                <input type="checkbox" />
              </div>
            <div class="col-xs-2">
                <i onClick={starToggle}class="star fa fa-star-o"></i>
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
