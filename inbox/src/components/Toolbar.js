import React from 'react';

const Toolbar = ({select}) => {

    return (
        <div className="App">
            <div class="row toolbar">
                <div class="col-md-12">
                    <a class="btn btn-danger">
                        <i class="fa fa-plus"></i>
                    </a>
                    <p class="pull-right">
                    <span class="badge badge">2</span>
                     unread messages
                    </p>

                    <button class="btn btn-default">
                        <i class="fa fa-check-square-o"></i>
                    </button>

                    <button  onClick={() => select()} class="btn btn-default">
                    Mark As Read
                    </button>

                    <button class="btn btn-default">
                    Mark As Unread
                    </button>

                    <select class="form-control label-select">
                        <option>Apply label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>

                    <select class="form-control label-select">
                        <option>Remove label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>

                    <button class="btn btn-default">
                        <i class="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Toolbar
