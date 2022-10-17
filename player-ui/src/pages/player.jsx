import PlayerInput from "../components/input";
import PlayerTable from "../components/table";

const { Component } = require("react");

class Player extends Component{

    state = {
        playerData: [],
        newUsernameInputValue: '',
        newEmailInputValue: '',
        newPasswordInputValue: '',
        isInsert: true,
        activeId: '',
        isInsert2: true,
        activeId2: '',
        searchIdInputValue:'',
        searchUsernameInputValue: '',
        searchEmailInputValue: '',
        searchExperienceInputValue: '',
        searchLevelInputValue: '',
        expInput: true,
        idInput: false
    }

    //fungsi GET /players
    getAllPlayerData = async () => {
        const resp = await fetch('http://localhost:5000/api/players')
        const data = await resp.json()
        
        this.setState({
            playerData: data.message
        })
    }

    //fungsi POST /players
    createNewPlayer =  async () => {
        const data = {
            username : this.state.newUsernameInputValue,
            email: this.state.newEmailInputValue,
            password: this.state.newPasswordInputValue
        }
        const resp = await fetch('http://localhost:5000/api/players', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if(resp.status === 201){
            this.getAllPlayerData()
            this.setState({
                newUsernameInputValue: '',
                newEmailInputValue: '',
                newPasswordInputValue: ''})
        }
    }

    //fungsi onChange di input section Create Player or Edit Data
    inputNewPlayerData = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    //fungsi onChange di input section Find Player by Id & Add Exp
    inputSearchPlayerData = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    //fungsi GET /players/:id
    getPlayerDataById = async (id) => {
        const data = {
            id: this.state.searchIdInputValue
        }
        const resp = await fetch(`http://localhost:5000/api/players/${data.id}`)
        const dataById = await resp.json()
        const playerDataById = await dataById.message
        console.log(playerDataById)

        this.setState({
            searchUsernameInputValue: playerDataById.username,
            searchEmailInputValue: playerDataById.email,
            searchExperienceInputValue: '',
            searchLevelInputValue: playerDataById.lvl,
            isInsert2: false,
            activeId2: playerDataById.id,
            expInput: false,
            idInput: true
        })
    }

    //fungsi POST /players/exp/:id
    addExp = async () => {
        const data = {
            exp: this.state.searchExperienceInputValue
        }
        const resp = await fetch(`http://localhost:5000/api/players/exp/${this.state.activeId2}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(resp.status === 200){
            this.getAllPlayerData()
            this.setState({
                searchIdInputValue: '',                
                searchUsernameInputValue: '',
                searchEmailInputValue: '',
                searchExperienceInputValue: '',
                searchLevelInputValue: '',
                isInsert2: true,
                expInput: true,
                idInput: false
            })
        }
    }

    //fungsi DELETE /players/:id
    deletePlayerData = async (id) => {
        const resp = await fetch(`http://localhost:5000/api/players/${id}`,{
          method: 'DELETE'
        })
        if(resp.status === 200){
          this.getAllPlayerData()
        }
      }
    
    //fungsi untuk menyajikan data player ke dalam input section Create Player or Edit Data untuk diedit
    toggleEdit = (player) => {
        console.log(player)
        this.setState({
            newUsernameInputValue: player.username,
            newEmailInputValue: player.email,
            newPasswordInputValue: player.password,
            isInsert: false,
            activeId: player.id
        })
    }

    //fungsi PUT /players/:id
    editPlayerData = async () => {
        const data = {
            username: this.state.newUsernameInputValue,
            email: this.state.newEmailInputValue,
            password: this.state.newPasswordInputValue
        }

        const resp = await fetch(`http://localhost:5000/api/players/${this.state.activeId}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(resp.status === 200){
            this.getAllPlayerData()
            this.setState({
                newUsernameInputValue: '',
                newEmailInputValue: '',
                newPasswordInputValue: '',
                isInsert: true
              })
        }
    }
    
    componentDidMount(){
        this.getAllPlayerData()
    }

    render(){
        return(
            <div>
                <PlayerInput 
                playerData={this.state.playerData}
                newUsernameInputValue={this.state.newUsernameInputValue}
                newEmailInputValue={this.state.newEmailInputValue}
                newPasswordInputValue={this.state.newPasswordInputValue}
                isInsert={this.state.isInsert}
                activeId={this.state.activeId}
                isInsert2={this.state.isInsert2}
                activeId2={this.state.activeId2}
                searchIdInputValue={this.state.searchIdInputValue}
                searchUsernameInputValue={this.state.searchUsernameInputValue}
                searchEmailInputValue={this.state.searchEmailInputValue} 
                searchExperienceInputValue={this.state.searchExperienceInputValue}
                searchLevelInputValue={this.state.searchLevelInputValue} 
                expInput={this.state.expInput}
                idInput={this.state.idInput}

                createNewPlayer={()=>{this.createNewPlayer()}}
                inputNewPlayerData={(event)=> {this.inputNewPlayerData(event)}}
                inputSearchPlayerData={(event)=>{this.inputSearchPlayerData(event)}}
                getPlayerDataById={(id)=>{this.getPlayerDataById(id)}}
                addExp={(id)=>{this.addExp(id)}}
                editPlayerData={()=>{this.editPlayerData()}}/>

                <PlayerTable 
                playerData={this.state.playerData}

                deletePlayerData={(id) => {this.deletePlayerData(id)}}
                editPlayerData={(player) => {this.toggleEdit(player)}}
                 />
            </div>
        )
    }
}

export default Player