const PlayerTable = (props) => {
    return(
        <div className = 'table-section'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Player Id</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Experience</th>
                                <th scope="col">Level</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.playerData.map((player) => (
                                <tr key={player.id}>
                                    <td>{player.id}</td>
                                    <td>{player.username}</td>
                                    <td>{player.email}</td>
                                    <td>{player.experience}</td>
                                    <td>{player.lvl}</td>
                                    <td>
                                        <button className="btn btn-primary mx-2" onClick={() => {props.editPlayerData(player)}}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => {props.deletePlayerData(player.id)}}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
    )
}

export default PlayerTable