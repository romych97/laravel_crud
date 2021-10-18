import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../config'

import CreateModal from '../Modals/CreateModal'
import EditModal from '../Modals/EditModal'

export default function MainPage() {

    const [combinedData, setData] = useState([]);

    const [activeTab, setActiveTab] = useState('goods');

    const [editModal, setEditModal] = useState({type: '', show: false, index: null});
    const [createModal, setCreateModal] = useState({type: '', show: false});
    
    useEffect(() => { getCombinedData(); }, []);

    async function searchShippedOrders(search) {
        let searchResult = await fetch(API_BASE_URL + `/shippedOrders/search?search=${search}`)
        let data = await searchResult.json();

        setData(prevState => ({ ...prevState, ['shippedOrders']: data }));
    }

    async function removeCombinedData(id, index, type) {
        try {

            const response = await fetch(API_BASE_URL + `/${ type }/` + id, {
                method: 'DELETE',
            });

            if (response.ok /* && response.status == 204*/ ) {
                combinedData[type].splice(index, 1)
    
                setData(prevState => ({
                     ...prevState, [type]: combinedData[type]
                }));
            }

        } catch (err) {
            console.error(err);
        }
    }

    async function getCombinedData() {
        try {

            // setData({ isLoading: true });
            // const accessToken = this.props.authState.accessToken;

            const response = await fetch(API_BASE_URL + '/all', {
                // headers: { Authorization: `Bearer ${accessToken}`, },
            });

            const dataList = await response.json();
            console.log(dataList, 'dataList')
            setData(dataList);

        } catch (err) {
            // setData({ isLoading: false });
            console.error(err);
        }
    }

    async function saveCombinedData(type) {
        console.log(type)
    }

    
    return (
        <div>
            <div className="container">
                <div className="bg-light d-flex mb-3 mt-3">
                    <div className="w-50">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button onClick={ (e) => setActiveTab('goods') }
                                        className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Goods</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button onClick={ (e) => setActiveTab('sites') }
                                        className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Sites</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button onClick={ (e) => setActiveTab('shippedOrders') } 
                                        className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Shipped Orders</button>
                            </li>
                        </ul>
                    </div>
                    { activeTab == 'goods' && <div className="w-50 d-flex justify-content-end" id="searchButton">
                        <button onClick={ (e) => setCreateModal({type: 'goods', show: true}) } className="btn btn-outline-success my-2 my-sm-0">Create</button>
                    </div> }
                    { activeTab == 'sites' && <div className="w-50 d-flex justify-content-end" id="searchButton">
                        <button onClick={ (e) => setCreateModal({type: 'sites', show: true}) } className="btn btn-outline-success my-2 my-sm-0">Create</button>
                    </div> }
                    { activeTab == 'shippedOrders' && <div className="w-50 d-flex justify-content-end" id="searchButton">
                        <input id="shippedOrdersInput" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={ (e) => searchShippedOrders(document.getElementById('shippedOrdersInput').value) } 
                                className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

                        <button onClick={ (e) => setCreateModal({type: 'shippedOrders', show: true}) } className="btn btn-outline-success my-2 my-sm-0">Create</button>
                    </div> }
                </div> 
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <table className="table">
                            <thead>
                                <tr className="text-small">
                                    <td className="text-nowrap" scope="col">ID</td>
                                    {/* <td className="text-nowrap" scope="col">Created At</td>
                                    <td className="text-nowrap" scope="col">Updated At</td> */}
                                    <td className="text-nowrap" scope="col">Status</td>
                                    {/* <td className="text-nowrap" scope="col">Site ID</td> */}
                                    <td className="text-nowrap" scope="col">Brand</td>
                                    <td className="text-nowrap" scope="col">Item</td>
                                    {/* <td className="text-nowrap" scope="col">Category ID</td> */}
                                    {/* <td className="text-nowrap" scope="col">SKU</td> */}
                                    {/* <td className="text-small text-nowrap" scope="col">ASIN</td> */}
                                    <td className="text-nowrap" scope="col">Stock</td>
                                    <td className="text-nowrap" scope="col">Actions</td>
                                </tr>
                            </thead>
                            <tbody style={{"borderColor": "#f8f9fa"}}>
                                
                                { combinedData && combinedData.goods ? combinedData.goods.map((item, index) => (
                                    <tr key={index} className="text-small">
                                        <td className="text-nowrap">{ item['id'] }</td>
                                        {/* <td className="text-nowrap">{ item['created'] }</td>
                                        <td className="text-nowrap">{ item['changed'] }</td> */}
                                        <td className="text-nowrap">{ item['status'] }</td>
                                        {/* <td>{ item['site-id'] }</td> */}
                                        <td className="text-nowrap">{ item['brand'] }</td>
                                        <td className="text-nowrap">{ item['item'] }</td>
                                        {/* <td>{ item['category-id'] }</td> */}
                                        {/* <td>{ item['sku'] }</td> */}
                                        {/* <td>{ item['asin'] }</td> */}
                                        <td className="text-nowrap">{ item['stock'] }</td>
                                        <td className="text-nowrap">
                                            {/* <button className="btn text-small btn-primary px-2 py-1 mx-1">E</button> */}
                                            <button onClick={ (e) => setEditModal({type: 'goods', show: true, index: index}) } className="btn text-small btn-primary px-2 py-1">Edit</button>
                                            <button onClick={ (e) => removeCombinedData(item['id'], index, 'goods') } className="btn text-small btn-danger px-2 py-1 mx-1">Remove</button>
                                        </td>
                                    </tr>
                                )) : null }

                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td className="text-small text-nowrap" scope="col">ID</td>
                                    {/* <td className="text-small text-nowrap" scope="col">Created At</td>
                                    <td className="text-small text-nowrap" scope="col">Updated At</td> */}
                                    <td className="text-small text-nowrap" scope="col">Status</td>
                                    <td className="text-small text-nowrap" scope="col">Domain</td>
                                    <td className="text-small text-nowrap" scope="col">Brand</td>
                                    <td className="text-small text-nowrap" scope="col">Username</td>
                                    {/* <td className="text-small text-nowrap" scope="col">Domain</td> */}
                                    {/* <td className="text-small text-nowrap" scope="col">Password</td> */}
                                    <td className="text-nowrap" scope="col">Actions</td>
                                </tr>
                            </thead>
                            <tbody style={{"borderColor": "#f8f9fa"}}>
                                { combinedData && combinedData.sites ? combinedData.sites.map((item, index) => (
                                    <tr key={index} className="text-small">
                                        <td className="text-nowrap">{item['id']}</td>
                                        {/* <td className="text-nowrap">{item['created']}</td>
                                        <td className="text-nowrap">{item['updated']}</td> */}
                                        <td className="text-nowrap">{item['status']}</td>
                                        <td className="text-nowrap">{item['domain']}</td>
                                        <td className="text-nowrap">{item['brand']}</td>
                                        <td className="text-nowrap">{item['username']}</td>
                                        <td className="text-nowrap">
                                            {/* <button className="btn text-small btn-primary px-2 py-1 mx-1">E</button> */}
                                            <button onClick={ (e) => setEditModal({type: 'sites', show: true, index: index}) } className="btn text-small btn-primary px-2 py-1">Edit</button>
                                            <button onClick={ (e) => removeCombinedData(item['id'], index, 'sites') } className="btn text-small btn-danger px-2 py-1 mx-1">Remove</button>
                                        </td>
                                    </tr>
                                )) : null }
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td className="text-nowrap" scope="col">ID</td>
                                    {/* <td className="text-nowrap" scope="col">Created At</td>
                                    <td className="text-nowrap" scope="col">Updated At</td> */}
                                    <td className="text-nowrap" scope="col">Host</td>
                                    <td className="text-nowrap" scope="col">Num</td>
                                    <td className="text-nowrap" scope="col">Status</td>
                                    <td className="text-nowrap" scope="col">Users</td>
                                    {/* <td scope="col">Sendings</td> */}
                                    {/* <td className="text-nowrap" scope="col">SKU</td> */}
                                    <td className="text-nowrap" scope="col">Stars</td>
                                    <td className="text-nowrap" scope="col">Email</td>
                                    <td className="text-nowrap" scope="col">Address</td>
                                    <td className="text-nowrap" scope="col">Actions</td>
                                </tr>
                            </thead>
                            <tbody style={{"borderColor": "#f8f9fa"}}>
                                { combinedData && combinedData.shippedOrders ? combinedData.shippedOrders.map((item, index) => (
                                    <tr key={index} className="text-small">
                                        <td className="text-nowrap" scope="row">{ item.id }</td>
                                        {/* <td className="text-nowrap" scope="col">{ item['created'] }</td>
                                        <td className="text-nowrap" scope="col">{ item['updated'] }</td> */}
                                        <td className="text-nowrap" scope="col">{ item['host'] }</td>
                                        <td className="text-nowrap" scope="col">{ item['num'] }</td>
                                        <td className="text-nowrap" scope="col">{ item['status'] }</td>
                                        <td className="text-nowrap" scope="col">{ item['users'] }</td>
                                        <td className="text-nowrap" scope="col">{ item['stars'] }</td>
                                        <td className="text-nowrap" scope="col">{ item['email'] }</td>
                                        <td className="text-nowrap" scope="col">{ item['address'] }</td>
                                        <td className="text-nowrap">
                                            {/* <button className="btn text-small btn-primary px-2 py-1 mx-1">E</button> */}
                                            <button onClick={ (e) => setEditModal({type: 'shippedOrders', show: true, index: index}) } className="btn text-small btn-primary px-2 py-1">Edit</button>
                                            <button onClick={ (e) => removeCombinedData(item['id'], index, 'shippedOrders') } className="btn text-small btn-danger px-2 py-1 mx-1">Remove</button>
                                        </td>
                                    </tr>
                                )) : null }
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* EDIT MODAL */}
                    { editModal.show && <EditModal combinedData={ combinedData } saveCombinedData={ saveCombinedData } 
                                                   setEditModal={ setEditModal } editModal={ editModal }/> }
                {/* !EDIT MODAL */}

                {/* CREATE MODAL */}
                    { createModal.show && <CreateModal setData={ setData } type={ createModal.type } 
                                                       setCreateModal={ setCreateModal } /> }
                {/* !CREATE MODAL */}

            </div>
        </div>
    )
}
