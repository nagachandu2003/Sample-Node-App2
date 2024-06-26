import { Component } from 'react';

class Hello extends Component {
    state = {userinput:'',password:'',itemsList:[]}


    componentDidMount() {
        this.getData();
    }

    getData = async () => {
<<<<<<< HEAD
        const response = await fetch("http://localhost:3002/users");
=======
        const response = await fetch("https://sample-node-app2.vercel.app/users");
>>>>>>> 074575f4b29551c4d77395ab33a75bec69887345
        const data = await response.json()
        console.log(data);
        this.setState({itemsList:data})
    };

    updateData = async () => {
        const {userinput,password} = this.state
        const data = {
            userinput,
            password
        }
        const options = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // stringify the JSON data
        };
<<<<<<< HEAD
        const response = await fetch("http://localhost:3002/users", options);
=======
        const response = await fetch("https://sample-node-app2.vercel.app/users", options);
>>>>>>> 074575f4b29551c4d77395ab33a75bec69887345
        if(response.ok)
        console.log("Password Updated Successfully");
        else
        console.log("Failed to updated password");
    }

    postData = async () => {
        const {userinput,password} = this.state
        const data = {
            userinput,
            password
        }
        console.log(data);
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // stringify the JSON data
        };
<<<<<<< HEAD
        const response = await fetch("http://localhost:3002/users", options);
=======
        const response = await fetch("https://sample-node-app2.vercel.app/users", options);
>>>>>>> 074575f4b29551c4d77395ab33a75bec69887345
        if(response.ok)
        console.log("User inserted Successfully");
        else
        console.log("Failed to insert user");
    };

    onChangeUsername = (event) => {
        this.setState({userinput:event.target.value});
    }

    onDelete = async () => {
        console.log("I am Called");
        const { userinput } = this.state;
        console.log(userinput)
        const options = {
            method: "DELETE"
        };
<<<<<<< HEAD
        const response = await fetch(`http://localhost:3002/users/${userinput}`, options);
=======
        const response = await fetch(`https://sample-node-app2.vercel.app/users/${userinput}`, options);
>>>>>>> 074575f4b29551c4d77395ab33a75bec69887345
        if (response.ok) {
            console.log("User deleted successfully");
        } else {
            console.error("Failed to delete user");
        }
    };


    onChangePassword = (event) => {
        this.setState({password : event.target.value})
    }
    
    onSubmitForm = (event) => {
        event.preventDefault();
        // this.postData();
        // this.updatedData();
        this.setState({userinput:'',password:''})
    }

    // onDelete = async () => {
    //     console.log("I am Called")
    //     const {userinput} = this.state
    //     const options = {
    //         method : "DELETE"   
    //     }
    //     const response = await fetch(`http://localhost:8085/users/${userinput}`,options)
    //     const data = await response.json()
    //     console.log(data);
    // }

    render() {
        const {userinput,password,itemsList} = this.state
        // this.postData();
        return (
            <>
            <h1>Hello</h1>
            {itemsList.map((ele) => <p key={ele.username}>{ele.username},{ele.password}</p>)}
            <p>Delete User</p>
            <input type="text" onChange={this.onChangeUsername} value={userinput}/>
            <button type="button" onClick={this.onDelete}>Delete</button> 
            <form onSubmit={this.postData}>
                Username : <input type="text" onChange={this.onChangeUsername} value={userinput}/>
                Password : <input type="password" onChange={this.onChangePassword} value={password}/>
                <button type="submit">Add User</button>
            </form>
            </>
        );
    }
}

export default Hello;
