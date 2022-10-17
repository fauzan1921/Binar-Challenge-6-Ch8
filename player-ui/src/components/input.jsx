const PlayerInput = (props) => {
    return(
        <div className="d-flex">
                    <div className="input-section mx-5">
                        <h2>Create Player or Edit Data</h2>
                        <div className="input-group mb-3">
                            <input id='newUsernameInputValue' onChange={props.inputNewPlayerData} type="text" className="form-control" placeholder="Username" value={props.newUsernameInputValue}/>
                        </div>
                        <div className="input-group mb-3">
                            <input id='newEmailInputValue' onChange={props.inputNewPlayerData} type="text" className="form-control" placeholder="Email" value={props.newEmailInputValue} />
                        </div>
                        <div className="input-group mb-3">
                            <input id='newPasswordInputValue' onChange={props.inputNewPlayerData} type="password" className="form-control" placeholder="Password" value={props.newPasswordInputValue}/>
                        </div>
                        {
                            props.isInsert === true ? (
                            <button className='btn btn-primary' onClick={props.createNewPlayer}>
                                Create
                            </button>
                            ) : (
                            <button className='btn btn-success mx-2' onClick={props.editPlayerData}>
                                Edit
                            </button>
                            )
                        }
                    </div>

                    <div className="input-section mx-5">
                        <h2>Find Player by Id & Add Exp</h2>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Id</span>
                            <input id='searchIdInputValue' onChange={props.inputSearchPlayerData} type="text" className="form-control" disabled={props.idInput} value={props.searchIdInputValue}/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Username</span>
                            <input id='searchUsernameInputValue' type="text" className="form-control"  disabled={true} value={props.searchUsernameInputValue}/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Email</span>
                            <input type="text" className="form-control" disabled={true} value={props.searchEmailInputValue} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Exp</span>
                            <input id='searchExperienceInputValue' onChange={props.inputSearchPlayerData} type="number" className="form-control" placeholder="minimal 1000" disabled={props.expInput} value={props.searchExperienceInputValue}/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Level</span>
                            <input onChange={props.inputNewPlayerData} type="text" className="form-control" disabled={true} value={props.searchLevelInputValue}/>
                        </div>
                        {
                            props.isInsert2 === true ? (
                            <button className='btn btn-primary' onClick={props.getPlayerDataById}>
                                Search
                            </button>
                            ) : (
                            <button className='btn btn-success mx-2' onClick={props.addExp}>
                                Add Exp
                            </button>
                            )
                        }
                    </div>
                </div>
    )
}

export default PlayerInput
