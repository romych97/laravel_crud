import React from 'react'
import { API_BASE_URL } from '../../config'

export default function EditModal(props) {

    async function saveCombinedData() {
        console.log(props.editModal.type  , 'type')

        let json = {}
        if (props.editModal.type == 'goods') {
            json = {
                "id": document.getElementById('id1').value,
                "status": document.getElementById('status1').value,
                "brand": document.getElementById('brand1').value,
                "item": document.getElementById('item1').value,
                "stock": document.getElementById('stock1').value,
            }
        }
        else if (props.editModal.type == 'sites') {
            json = {
                "id": document.getElementById('id2').value,
                "status": document.getElementById('status2').value,
                "domain": document.getElementById('domain2').value,
                "brand": document.getElementById('brand2').value,
                "username": document.getElementById('username2').value,
            }
        }
        else if (props.editModal.type == 'shippedOrders') {
            json = {
                "id": document.getElementById('id3').value,
                "host": document.getElementById('host3').value,
                "num": document.getElementById('num3').value,
                "status": document.getElementById('status3').value,
                "user": document.getElementById('user3').value,
                "stars": document.getElementById('stars3').value,
                "email": document.getElementById('email3').value,
                "address": document.getElementById('address3').value,
            }
        }
        let response = await fetch(API_BASE_URL + `/${ props.editModal.type }/${ json.id }`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(json)
        });

        let responseJson = response.json();
        console.log(responseJson)
        if (response.ok) {
            responseJson.then(data => {

                let editedObject = props.combinedData[props.editModal.type]
                
                editedObject[props.editModal.index].status = data.status
                editedObject[props.editModal.index].brand = data.brand
                editedObject[props.editModal.index].item = data.item
                editedObject[props.editModal.index].stock = data.stock

                console.log(editedObject)

                props.setData(prevState => ({ 
                    ...prevState, [props.editModal.type]: editedObject
                }));
            })
        }
    }

    return (
        <div className="modal d-block">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Edit { props.editModal.type } table</h5>
                    <button onClick={ (e) => props.setEditModal({type: '', show: false, index: null}) } type="button" className="btn close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    { props.editModal.type == 'goods' ? <div>
                        <div className="form-group">
                            <label htmlFor="id1">ID</label>
                            <input disabled readOnly defaultValue={ props.combinedData.goods[props.editModal.index].id }
                                    type="email" className="form-control" id="id1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="status1">Status</label>
                            <input  defaultValue={ props.combinedData.goods[props.editModal.index].status }
                                    type="email" className="form-control" id="status1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="brand1">Brand</label>
                            <input  defaultValue={ props.combinedData.goods[props.editModal.index].brand }
                                    type="email" className="form-control" id="brand1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="item1">Item</label>
                            <input defaultValue={ props.combinedData.goods[props.editModal.index].item }
                                    type="email" className="form-control" id="item1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="stock1">Stock</label>
                            <input defaultValue={ props.combinedData.goods[props.editModal.index].stock }
                                    type="email" className="form-control" id="stock1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                    </div> : null }
                    { props.editModal.type == 'sites' ? <div>
                        <div className="form-group">
                            <label htmlFor="id2">ID</label>
                            <input disabled readOnly defaultValue={ props.combinedData.sites[props.editModal.index].id }
                                    type="email" className="form-control" id="id2" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="status2">Status</label>
                            <input  defaultValue={ props.combinedData.sites[props.editModal.index].status }
                                    type="email" className="form-control" id="status2" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="domain2">Domain</label>
                            <input  defaultValue={ props.combinedData.sites[props.editModal.index].domain }
                                    type="email" className="form-control" id="domain2" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="bran2">Brand</label>
                            <input defaultValue={ props.combinedData.sites[props.editModal.index].brand }
                                    type="email" className="form-control" id="bran2" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="username2">Username</label>
                            <input defaultValue={ props.combinedData.sites[props.editModal.index].username }
                                    type="email" className="form-control" id="username2" aria-describedby="emailHelp" placeholder="" />
                        </div>
                    </div> : null }
                    { props.editModal.type == 'shippedOrders' ? <div>
                        <div className="form-group">
                            <label htmlFor="id3">ID</label>
                            <input disabled readOnly defaultValue={ props.combinedData.sites[props.editModal.index].id }
                                    type="email" className="form-control" id="id3" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="host3">Host</label>
                            <input  defaultValue={ props.combinedData.sites[props.editModal.index].host }
                                    type="email" className="form-control" id="host3" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="num3">Num</label>
                            <input  defaultValue={ props.combinedData.shippedOrders[props.editModal.index].num }
                                    type="email" className="form-control" id="num3" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="status3">Status</label>
                            <input defaultValue={ props.combinedData.shippedOrders[props.editModal.index].status }
                                    type="email" className="form-control" id="status3" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="users3">Users</label>
                            <input defaultValue={ props.combinedData.shippedOrders[props.editModal.index].users }
                                    type="email" className="form-control" id="users3" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1">Stars</label>
                            <input defaultValue={ props.combinedData.shippedOrders[props.editModal.index].stars }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="stars3">Email</label>
                            <input defaultValue={ props.combinedData.shippedOrders[props.editModal.index].email }
                                    type="email" className="form-control" id="stars3" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="address3">Address</label>
                            <input defaultValue={ props.combinedData.shippedOrders[props.editModal.index].address }
                                    type="email" className="form-control" id="address3" aria-describedby="emailHelp" placeholder="" />
                        </div>
                    </div> : null }
                </div>
                <div className="modal-footer">
                    <button onClick={ (e) => props.setEditModal({type: '', show: false, index: null}) } type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button onClick={ (e) => saveCombinedData(props.editModal.type) } type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div> 
        </div>
    )
}
