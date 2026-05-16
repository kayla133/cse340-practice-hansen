// import the faculty model functions
// we need to use the functions and list of information from the faculty model
// this is the code we exported from faculty model: export { getFacultyById, getSortedFaculty };

import { getFacultyById, getSortedFaculty } from '../../models/faculty/faculty.js';

// create a facultyListPage function that renders the faculty list page
const facultyPage = (req, res) => {
    const faculty = getSortedFaculty('name');
// this line is going to call our id that has our faculty name and information.
// alot like calling json ids
    res.render('faculty/list', {
        name: 'Faculty Directory',
        faculty: faculty
    })
}

// create a facultyDetailPage function that uses rout parameters to look up individual faculty (think about looking up courses like we did in catalog)
const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.id;
    const instructor = getFacultyById(facultyId);
    // include proper error handling for invalid faculty IDs
    if (!instructor) {
        const err = new Error('Faculty member not found.');
        err.status = 404;
        return next(err)
    }

    // show details of that instructor
    res.render('faculty/detail', {
        title: instructor.name,
        instructor: instructor
    });
}
// export the functions
export { facultyPage, facultyDetailPage };