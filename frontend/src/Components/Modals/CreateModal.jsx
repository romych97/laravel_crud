import React from 'react'
import { API_BASE_URL } from '../../config'

export default function CreateModal(props) {
    
    async function saveCombinedData() {
        console.log(props.type, 'type')

        let json = {}
        if (props.type == 'goods') {
            json = {
                "status": document.getElementById('status1').value,
                "brand": document.getElementById('brand1').value,
                "item": document.getElementById('item1').value,
                "stock": document.getElementById('stock1').value,
            }
        }
        else if (props.type == 'sites') {
            json = {
                "status": document.getElementById('status2').value,
                "domain": document.getElementById('domain2').value,
                "brand": document.getElementById('brand2').value,
                "username": document.getElementById('username2').value,
            }
        }
        else if (props.type == 'shippedOrders') {
            json = {
                "host": document.getElementById('host3').value,
                "num": document.getElementById('num3').value,
                "status": document.getElementById('status3').value,
                "user": document.getElementById('user3').value,
                "stars": document.getElementById('stars3').value,
                "email": document.getElementById('email3').value,
                "address": document.getElementById('address3').value,
                "sku": document.getElementById('sku3').value,
            }
        }
        let response = await fetch(API_BASE_URL + `/${ props.type }`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(json)
        });
        if (response.ok) {
            response.json().then(data => {
                console.log(data)
                props.setData(prevState => ({ 
                    ...prevState, [props.type]: prevState[props.type].concat([data]) 
                }));
                props.setCreateModal({type: '', show: false})
            })
        }
    }
    
    return (
        
        <div className="modal d-block">
             <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Create { props.type }</h5>
                    <button onClick={ (e) => props.setCreateModal({type: '', show: false}) } type="button" className="btn close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    { props.type == 'goods' ? <div>
                        <form id="goodsForm">
                            <div className="form-group mt-2">
                                <label htmlFor="status1">Status</label>
                                <input type="text" className="form-control" id="status1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="brand1">Brand</label>
                                <input type="text" className="form-control" id="brand1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="item1">Item</label>
                                <input  type="text" className="form-control" id="item1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="stock1">Stock</label>
                                <input  type="text" className="form-control" id="stock1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                        </form>
                    </div> : null }
                    { props.type == 'sites' ? <div>
                        <div className="form-group mt-2">
                            <label htmlFor="status2">Status</label>
                            <input type="text" className="form-control" id="status2" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="domain2">Domain</label>
                            <input type="text" className="form-control" id="domain2" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="brand2">Brand</label>
                            <input type="text" className="form-control" id="brand2" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="username2">Username</label>
                            <input type="text" className="form-control" id="username2" aria-describedby="emailHelp" placeholder="" />
                        </div>
                    </div> : null }
                    { props.type == 'shippedOrders' ? <div>
                        <form id="shippedOrdersForm">
                            <div className="form-group mt-2">
                                <label htmlFor="host3">Host</label>
                                <input type="text" className="form-control" id="host3" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="num3">Num</label>
                                <input type="text" className="form-control" id="num3" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="status3">Status</label>
                                <input type="text" className="form-control" id="status3" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="users3">User</label>
                                <input type="text" className="form-control" id="user3" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="stars3">Stars</label>
                                <input type="text" className="form-control" id="stars3" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="email3">Email</label>
                                <input type="text" className="form-control" id="email3" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="address3">Address</label>
                                <input type="text" className="form-control" id="address3" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="sku3">Sku</label>
                                <input type="text" className="form-control" id="sku3" aria-describedby="emailHelp" placeholder="" />
                            </div>
                        </form>
                    </div> : null }
                </div>
                <div className="modal-footer">
                    <button onClick={ (e) => props.setCreateModal({type: '', show: false}) } type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button onClick={ (e) => saveCombinedData(props.type) } type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    )
}
