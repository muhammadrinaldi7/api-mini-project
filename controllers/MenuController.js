import MenuList from "../models/MenuModel.js";

export const getAllMenu = async (req, res) => {
    try {
        const response = await MenuList.findAll();
        res.status(200).json(response);
        console.log(response)
    } catch (error) {
        req.status(500).json({ message: error.message });
        console.log(error.message);
    }
}

export const getSatuanMenu = async (req, res) => {
    try {
        const satuan = MenuList.rawAttributes.satuan.values;
        res.status(200).json(satuan);
    } catch (error) {
        req.status(500).json({ message: error.message });
        console.log(error.message);
    }
}

export const getMenuById = async (req, res) => {
    try {
        const response = await MenuList.findOne({ where: { id: req.params.id } });
        res.status(200).json(response);
    } catch (error) {
        req.status(500).json({ message: error.message });
        console.log(error.message);
    }
}

export const saveMenu = async (req, res) => {
    const nama_barang = req.body.nama_barang;
    const satuan = req.body.satuan;
    if(!nama_barang || !satuan) return res.status(400).json({message: 'Name and unit are required'});
    try {
        await MenuList.create(req.body);
        res.status(201).json({ message: "Menu created successfully" });
    } catch (error) {
        req.status(500).json({ message: error.message });
        console.log(error.message);
    }
}

export const updateMenu = async (req, res) => {
    const id = req.params.id;
    const { nama_barang, satuan } = req.body;
    if(!nama_barang || !satuan) return res.status(400).json({message: 'Name and unit are required'});
    try {
        await MenuList.update(req.body, { where: { id: id } });
        res.status(200).json({ message: "Menu updated successfully" });
    } catch (error) {
        req.status(500).json({ message: error.message });
        console.log(error.message);
    }
}

export const deleteMenu = async (req, res) => {
    const id = req.params.id;
    try {
        await MenuList.destroy({ where: { id: id } });
        res.status(200).json({ message: "Menu deleted successfully" });
    } catch (error) {
        req.status(500).json({ message: error.message });
        console.log(error.message);
    }
}