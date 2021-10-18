import React from 'react'

export default function EditModal(props) {
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
                            <label htmlFor="exampleInputEmail1">ID</label>
                            <input disabled readOnly defaultValue={ props.combinedData.goods[props.editModal.index].id }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1">Status</label>
                            <input  defaultValue={ props.combinedData.goods[props.editModal.index].status }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1">Brand</label>
                            <input  defaultValue={ props.combinedData.goods[props.editModal.index].brand }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1">Item</label>
                            <input defaultValue={ props.combinedData.goods[props.editModal.index].item }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1">Stock</label>
                            <input defaultValue={ props.combinedData.goods[props.editModal.index].stock }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                    </div> : null }
                    { props.editModal.type == 'sites' ? <div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">ID</label>
                            <input disabled readOnly defaultValue={ props.combinedData.sites[props.editModal.index].id }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1">Status</label>
                            <input  defaultValue={ props.combinedData.sites[props.editModal.index].status }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1">Domain</label>
                            <input  defaultValue={ props.combinedData.sites[props.editModal.index].domain }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1">Brand</label>
                            <input defaultValue={ props.combinedData.sites[props.editModal.index].brand }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1">Username</label>
                            <input defaultValue={ props.combinedData.sites[props.editModal.index].username }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                    </div> : null }
                    { props.editModal.type == 'shippedOrders' ? <div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">ID</label>
                            <input disabled readOnly defaultValue={ props.combinedData.sites[props.editModal.index].id }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1">Host</label>
                            <input  defaultValue={ props.combinedData.sites[props.editModal.index].host }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1">Num</label>
                            <input  defaultValue={ props.combinedData.shippedOrders[props.editModal.index].num }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1">Status</label>
                            <input defaultValue={ props.combinedData.shippedOrders[props.editModal.index].status }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1">Users</label>
                            <input defaultValue={ props.combinedData.shippedOrders[props.editModal.index].users }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1">Stars</label>
                            <input defaultValue={ props.combinedData.shippedOrders[props.editModal.index].stars }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input defaultValue={ props.combinedData.shippedOrders[props.editModal.index].email }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1">Address</label>
                            <input defaultValue={ props.combinedData.shippedOrders[props.editModal.index].address }
                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                    </div> : null }
                </div>
                <div className="modal-footer">
                    <button onClick={ (e) => props.setEditModal({type: '', show: false, index: null}) } type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button onClick={ (e) => props.saveCombinedData(props.editModal.type) } type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div> 
        </div>
    )
}
