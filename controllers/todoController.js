const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');

const Activites = require('../models/todoModel');

/**
 * @desc For crate task 
 * @route /api/task
 * @access Public
 */
exports.createActivites = asyncHandler(async (req, res) => {
    const {title, activity_group_id} = req.body
    const activites = await Activites.create({title, activity_group_id});
    res.status(201).json({
        success: true,
        data: activites,
        message: 'Task is created successfully'
    })
})

/**
 * @desc For Update Task
 * @route /api/task/:id
 * @access Public
 */
 exports.updateActivites = asyncHandler(async (req, res) => {
    const {title, activity_group_id} = req.body
    const existActivites = await Activites.findOne({ _id : req.params.id})
    if(existActivites){
        existActivites.title = title;
        existActivites.activity_group_id = activity_group_id
        const updatedActivites = await existActivites.save();
        res.status(200).json({
            success: true,
            data: updatedActivites,
            message: 'Activites is updated successfully'
        })
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: 'Activites is Not Found'
        })
    }
   
})


/**
 * @desc For Delete Task
 * @route /api/task/:id
 * @access Public
 */
 exports.deleteActivites = asyncHandler(async (req, res) => {
    const existTask = await Activites.findOne({ _id : req.params.id})
    if(existTask){
        await existTask.remove();
        res.status(200).json({
            success: true,
            message: 'Task is deleted successfully'
        })
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: 'Task is Not Found'
        })
    }
   
})


/**
 * @desc For Get Single Task
 * @route /api/task/:id
 * @access Public
 */
 exports.getSingleActivites = asyncHandler(async (req, res) => {
    const existActivites = await Activites.findOne({ _id : req.params.id})
    if(existActivites){
        res.status(200).json({
            success: true,
            data:Activites,
            message: 'Activity is fetched successfully'
        })
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: 'Activity is Not Found'
        })
    }
   
})



/**
 * @desc For Get all Tasks
 * @route /api/task
 * @access Public
 */
 exports.getAllActivites = asyncHandler(async (req, res) => {
    const allActivites = await Activites.find({})
    if(allActivites){
        res.status(200).json({
            success: true,
            data:allActivites,
            message: 'All Activites are deleted successfully'
        })
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: ' are  Activites Not Found'
        })
    }
   
})