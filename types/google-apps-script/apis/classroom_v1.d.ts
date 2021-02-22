// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace Classroom {
        namespace Collection {
            namespace Courses {
                namespace CourseWork {
                    interface StudentSubmissionsCollection {
                        // Returns a student submission. * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested
                        // course, course work, or student submission or for access errors. * `INVALID_ARGUMENT` if the request is malformed. *
                        // `NOT_FOUND` if the requested course, course work, or student submission does not exist.
                        get(courseId: string, courseWorkId: string, id: string): Schema.StudentSubmission;
                        // Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the
                        // request. `-` may be specified as the `course_work_id` to include student submissions for multiple course work items.
                        // Course students may only view their own work. Course teachers and domain administrators may view all student
                        // submissions. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not
                        // permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is
                        // malformed. * `NOT_FOUND` if the requested course does not exist.
                        list(courseId: string, courseWorkId: string): Schema.ListStudentSubmissionsResponse;
                        // Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the
                        // request. `-` may be specified as the `course_work_id` to include student submissions for multiple course work items.
                        // Course students may only view their own work. Course teachers and domain administrators may view all student
                        // submissions. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not
                        // permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is
                        // malformed. * `NOT_FOUND` if the requested course does not exist.
                        list(courseId: string, courseWorkId: string, optionalArgs: object): Schema.ListStudentSubmissionsResponse;
                        // Modifies attachments of student submission. Attachments may only be added to student submissions belonging to course
                        // work objects with a `workType` of `ASSIGNMENT`. This request must be made by the Developer Console project of the [OAuth
                        // client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This
                        // method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the
                        // requested course or course work, if the user is not permitted to modify attachments on the requested student submission,
                        // or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course
                        // work, or student submission does not exist.
                        modifyAttachments(resource: Schema.ModifyAttachmentsRequest, courseId: string, courseWorkId: string, id: string): Schema.StudentSubmission;
                        // Updates one or more fields of a student submission. See google.classroom.v1.StudentSubmission for details of which
                        // fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth
                        // client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This
                        // method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the
                        // corresponding course work, if the user is not permitted to make the requested modification to the student submission, or
                        // for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work,
                        // or student submission does not exist.
                        patch(resource: Schema.StudentSubmission, courseId: string, courseWorkId: string, id: string): Schema.StudentSubmission;
                        // Updates one or more fields of a student submission. See google.classroom.v1.StudentSubmission for details of which
                        // fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth
                        // client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This
                        // method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the
                        // corresponding course work, if the user is not permitted to make the requested modification to the student submission, or
                        // for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work,
                        // or student submission does not exist.
                        patch(resource: Schema.StudentSubmission, courseId: string, courseWorkId: string, id: string, optionalArgs: object): Schema.StudentSubmission;
                        // Reclaims a student submission on behalf of the student that owns it. Reclaiming a student submission transfers ownership
                        // of attached Drive files to the student and updates the submission state. Only the student that owns the requested
                        // student submission may call this method, and only for a student submission that has been turned in. This request must be
                        // made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
                        // create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the
                        // requesting user is not permitted to access the requested course or course work, unsubmit the requested student
                        // submission, or for access errors. * `FAILED_PRECONDITION` if the student submission has not been turned in. *
                        // `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student
                        // submission does not exist.
                        reclaim(resource: any, courseId: string, courseWorkId: string, id: string): void;
                        // Returns a student submission. Returning a student submission transfers ownership of attached Drive files to the student
                        // and may also update the submission state. Unlike the Classroom application, returning a student submission does not set
                        // assignedGrade to the draftGrade value. Only a teacher of the course that contains the requested student submission may
                        // call this method. This request must be made by the Developer Console project of the [OAuth client
                        // ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method
                        // returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested
                        // course or course work, return the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the
                        // request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
                        return(resource: any, courseId: string, courseWorkId: string, id: string): void;
                        // Turns in a student submission. Turning in a student submission transfers ownership of attached Drive files to the
                        // teacher and may also update the submission state. This may only be called by the student that owns the specified student
                        // submission. This request must be made by the Developer Console project of the [OAuth client
                        // ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method
                        // returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested
                        // course or course work, turn in the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the
                        // request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
                        turnIn(resource: any, courseId: string, courseWorkId: string, id: string): void;
                    }
                }
                interface AliasesCollection {
                    // Creates an alias for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting
                    // user is not permitted to create the alias or for access errors. * `NOT_FOUND` if the course does not exist. *
                    // `ALREADY_EXISTS` if the alias already exists. * `FAILED_PRECONDITION` if the alias requested does not make sense for the
                    // requesting user or course (for example, if a user not in a domain attempts to access a domain-scoped alias).
                    create(resource: Schema.CourseAlias, courseId: string): Schema.CourseAlias;
                    // Returns a list of aliases for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the
                    // requesting user is not permitted to access the course or for access errors. * `NOT_FOUND` if the course does not exist.
                    list(courseId: string): Schema.ListCourseAliasesResponse;
                    // Returns a list of aliases for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the
                    // requesting user is not permitted to access the course or for access errors. * `NOT_FOUND` if the course does not exist.
                    list(courseId: string, optionalArgs: object): Schema.ListCourseAliasesResponse;
                    // Deletes an alias of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting
                    // user is not permitted to remove the alias or for access errors. * `NOT_FOUND` if the alias does not exist. *
                    // `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a
                    // user not in a domain attempts to delete a domain-scoped alias).
                    remove(courseId: string, alias: string): void;
                }
                interface AnnouncementsCollection {
                    // Creates an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is
                    // not permitted to access the requested course, create announcements in the requested course, share a Drive attachment, or
                    // for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not
                    // exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
                    create(resource: Schema.Announcement, courseId: string): Schema.Announcement;
                    // Returns an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is
                    // not permitted to access the requested course or announcement, or for access errors. * `INVALID_ARGUMENT` if the request
                    // is malformed. * `NOT_FOUND` if the requested course or announcement does not exist.
                    get(courseId: string, id: string): Schema.Announcement;
                    // Returns a list of announcements that the requester is permitted to view. Course students may only view `PUBLISHED`
                    // announcements. Course teachers and domain administrators may view all announcements. This method returns the following
                    // error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access
                    // errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
                    list(courseId: string): Schema.ListAnnouncementsResponse;
                    // Returns a list of announcements that the requester is permitted to view. Course students may only view `PUBLISHED`
                    // announcements. Course teachers and domain administrators may view all announcements. This method returns the following
                    // error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access
                    // errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
                    list(courseId: string, optionalArgs: object): Schema.ListAnnouncementsResponse;
                    // Modifies assignee mode and options of an announcement. Only a teacher of the course that contains the announcement may
                    // call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not
                    // permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is
                    // malformed. * `NOT_FOUND` if the requested course or course work does not exist.
                    modifyAssignees(resource: Schema.ModifyAnnouncementAssigneesRequest, courseId: string, id: string): Schema.Announcement;
                    // Updates one or more fields of an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if
                    // the requesting developer project did not create the corresponding announcement or for access errors. *
                    // `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested announcement has already been
                    // deleted. * `NOT_FOUND` if the requested course or announcement does not exist
                    patch(resource: Schema.Announcement, courseId: string, id: string): Schema.Announcement;
                    // Updates one or more fields of an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if
                    // the requesting developer project did not create the corresponding announcement or for access errors. *
                    // `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested announcement has already been
                    // deleted. * `NOT_FOUND` if the requested course or announcement does not exist
                    patch(resource: Schema.Announcement, courseId: string, id: string, optionalArgs: object): Schema.Announcement;
                    // Deletes an announcement. This request must be made by the Developer Console project of the [OAuth client
                    // ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding announcement item. This method
                    // returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the
                    // corresponding announcement, if the requesting user is not permitted to delete the requested course or for access errors.
                    // * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if no course exists with
                    // the requested ID.
                    remove(courseId: string, id: string): void;
                }
                interface CourseWorkCollection {
                    StudentSubmissions?: Collection.Courses.CourseWork.StudentSubmissionsCollection;
                    // Creates course work. The resulting course work (and corresponding student submissions) are associated with the Developer
                    // Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to make the request.
                    // Classroom API requests to modify course work and student submissions must be made with an OAuth client ID from the
                    // associated Developer Console project. This method returns the following error codes: * `PERMISSION_DENIED` if the
                    // requesting user is not permitted to access the requested course, create course work in the requested course, share a
                    // Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested
                    // course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
                    create(resource: Schema.CourseWork, courseId: string): Schema.CourseWork;
                    // Returns course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not
                    // permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is
                    // malformed. * `NOT_FOUND` if the requested course or course work does not exist.
                    get(courseId: string, id: string): Schema.CourseWork;
                    // Returns a list of course work that the requester is permitted to view. Course students may only view `PUBLISHED` course
                    // work. Course teachers and domain administrators may view all course work. This method returns the following error codes:
                    // * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. *
                    // `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
                    list(courseId: string): Schema.ListCourseWorkResponse;
                    // Returns a list of course work that the requester is permitted to view. Course students may only view `PUBLISHED` course
                    // work. Course teachers and domain administrators may view all course work. This method returns the following error codes:
                    // * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. *
                    // `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
                    list(courseId: string, optionalArgs: object): Schema.ListCourseWorkResponse;
                    // Modifies assignee mode and options of a coursework. Only a teacher of the course that contains the coursework may call
                    // this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not
                    // permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is
                    // malformed. * `NOT_FOUND` if the requested course or course work does not exist.
                    modifyAssignees(resource: Schema.ModifyCourseWorkAssigneesRequest, courseId: string, id: string): Schema.CourseWork;
                    // Updates one or more fields of a course work. See google.classroom.v1.CourseWork for details of which fields may be
                    // updated and who may change them. This request must be made by the Developer Console project of the [OAuth client
                    // ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method
                    // returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the
                    // corresponding course work, if the user is not permitted to make the requested modification to the student submission, or
                    // for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course
                    // work has already been deleted. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
                    patch(resource: Schema.CourseWork, courseId: string, id: string): Schema.CourseWork;
                    // Updates one or more fields of a course work. See google.classroom.v1.CourseWork for details of which fields may be
                    // updated and who may change them. This request must be made by the Developer Console project of the [OAuth client
                    // ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method
                    // returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the
                    // corresponding course work, if the user is not permitted to make the requested modification to the student submission, or
                    // for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course
                    // work has already been deleted. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
                    patch(resource: Schema.CourseWork, courseId: string, id: string, optionalArgs: object): Schema.CourseWork;
                    // Deletes a course work. This request must be made by the Developer Console project of the [OAuth client
                    // ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method
                    // returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the
                    // corresponding course work, if the requesting user is not permitted to delete the requested course or for access errors.
                    // * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if no course exists with
                    // the requested ID.
                    remove(courseId: string, id: string): void;
                }
                interface CourseWorkMaterialsCollection {
                    // Creates a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting
                    // user is not permitted to access the requested course, create course work material in the requested course, share a Drive
                    // attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed or if more than 20 * materials are
                    // provided. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error:
                    // * AttachmentNotVisible
                    create(resource: Schema.CourseWorkMaterial, courseId: string): Schema.CourseWorkMaterial;
                    // Returns a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting
                    // user is not permitted to access the requested course or course work material, or for access errors. * `INVALID_ARGUMENT`
                    // if the request is malformed. * `NOT_FOUND` if the requested course or course work material does not exist.
                    get(courseId: string, id: string): Schema.CourseWorkMaterial;
                    // Returns a list of course work material that the requester is permitted to view. Course students may only view
                    // `PUBLISHED` course work material. Course teachers and domain administrators may view all course work material. This
                    // method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the
                    // requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested
                    // course does not exist.
                    list(courseId: string): Schema.ListCourseWorkMaterialResponse;
                    // Returns a list of course work material that the requester is permitted to view. Course students may only view
                    // `PUBLISHED` course work material. Course teachers and domain administrators may view all course work material. This
                    // method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the
                    // requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested
                    // course does not exist.
                    list(courseId: string, optionalArgs: object): Schema.ListCourseWorkMaterialResponse;
                    // Updates one or more fields of a course work material. This method returns the following error codes: *
                    // `PERMISSION_DENIED` if the requesting developer project for access errors. * `INVALID_ARGUMENT` if the request is
                    // malformed. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if the
                    // requested course or course work material does not exist
                    patch(resource: Schema.CourseWorkMaterial, courseId: string, id: string): Schema.CourseWorkMaterial;
                    // Updates one or more fields of a course work material. This method returns the following error codes: *
                    // `PERMISSION_DENIED` if the requesting developer project for access errors. * `INVALID_ARGUMENT` if the request is
                    // malformed. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if the
                    // requested course or course work material does not exist
                    patch(resource: Schema.CourseWorkMaterial, courseId: string, id: string, optionalArgs: object): Schema.CourseWorkMaterial;
                    // Deletes a course work material. This request must be made by the Developer Console project of the [OAuth client
                    // ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work material item. This
                    // method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the
                    // corresponding course work material, if the requesting user is not permitted to delete the requested course or for access
                    // errors. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if no
                    // course exists with the requested ID.
                    remove(courseId: string, id: string): void;
                }
                interface StudentsCollection {
                    // Adds a user as a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the
                    // requesting user is not permitted to create students in this course or for access errors. * `NOT_FOUND` if the requested
                    // course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request
                    // errors: * CourseMemberLimitReached * CourseNotModifiable * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if the
                    // user is already a student or teacher in the course.
                    create(resource: Schema.Student, courseId: string): Schema.Student;
                    // Adds a user as a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the
                    // requesting user is not permitted to create students in this course or for access errors. * `NOT_FOUND` if the requested
                    // course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request
                    // errors: * CourseMemberLimitReached * CourseNotModifiable * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if the
                    // user is already a student or teacher in the course.
                    create(resource: Schema.Student, courseId: string, optionalArgs: object): Schema.Student;
                    // Returns a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting
                    // user is not permitted to view students of this course or for access errors. * `NOT_FOUND` if no student of this course
                    // has the requested ID or if the course does not exist.
                    get(courseId: string, userId: string): Schema.Student;
                    // Returns a list of students of this course that the requester is permitted to view. This method returns the following
                    // error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
                    list(courseId: string): Schema.ListStudentsResponse;
                    // Returns a list of students of this course that the requester is permitted to view. This method returns the following
                    // error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
                    list(courseId: string, optionalArgs: object): Schema.ListStudentsResponse;
                    // Deletes a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting
                    // user is not permitted to delete students of this course or for access errors. * `NOT_FOUND` if no student of this course
                    // has the requested ID or if the course does not exist.
                    remove(courseId: string, userId: string): void;
                }
                interface TeachersCollection {
                    // Creates a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting
                    // user is not permitted to create teachers in this course or for access errors. * `NOT_FOUND` if the requested course ID
                    // does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: *
                    // CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached *
                    // `ALREADY_EXISTS` if the user is already a teacher or student in the course.
                    create(resource: Schema.Teacher, courseId: string): Schema.Teacher;
                    // Returns a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting
                    // user is not permitted to view teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course
                    // has the requested ID or if the course does not exist.
                    get(courseId: string, userId: string): Schema.Teacher;
                    // Returns a list of teachers of this course that the requester is permitted to view. This method returns the following
                    // error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
                    list(courseId: string): Schema.ListTeachersResponse;
                    // Returns a list of teachers of this course that the requester is permitted to view. This method returns the following
                    // error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
                    list(courseId: string, optionalArgs: object): Schema.ListTeachersResponse;
                    // Deletes a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting
                    // user is not permitted to delete teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course
                    // has the requested ID or if the course does not exist. * `FAILED_PRECONDITION` if the requested ID belongs to the primary
                    // teacher of this course.
                    remove(courseId: string, userId: string): void;
                }
                interface TopicsCollection {
                    // Creates a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not
                    // permitted to access the requested course, create a topic in the requested course, or for access errors. *
                    // `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
                    create(resource: Schema.Topic, courseId: string): Schema.Topic;
                    // Returns a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not
                    // permitted to access the requested course or topic, or for access errors. * `INVALID_ARGUMENT` if the request is
                    // malformed. * `NOT_FOUND` if the requested course or topic does not exist.
                    get(courseId: string, id: string): Schema.Topic;
                    // Returns the list of topics that the requester is permitted to view. This method returns the following error codes: *
                    // `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. *
                    // `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
                    list(courseId: string): Schema.ListTopicResponse;
                    // Returns the list of topics that the requester is permitted to view. This method returns the following error codes: *
                    // `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. *
                    // `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
                    list(courseId: string, optionalArgs: object): Schema.ListTopicResponse;
                    // Updates one or more fields of a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the
                    // requesting developer project did not create the corresponding topic or for access errors. * `INVALID_ARGUMENT` if the
                    // request is malformed. * `NOT_FOUND` if the requested course or topic does not exist
                    patch(resource: Schema.Topic, courseId: string, id: string): Schema.Topic;
                    // Updates one or more fields of a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the
                    // requesting developer project did not create the corresponding topic or for access errors. * `INVALID_ARGUMENT` if the
                    // request is malformed. * `NOT_FOUND` if the requested course or topic does not exist
                    patch(resource: Schema.Topic, courseId: string, id: string, optionalArgs: object): Schema.Topic;
                    // Deletes a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not
                    // allowed to delete the requested topic or for access errors. * `FAILED_PRECONDITION` if the requested topic has already
                    // been deleted. * `NOT_FOUND` if no course or topic exists with the requested ID.
                    remove(courseId: string, id: string): void;
                }
            }
            namespace UserProfiles {
                interface GuardianInvitationsCollection {
                    // Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's
                    // guardian. Once the guardian accepts the invitation, their `state` will change to `COMPLETED` and they will start
                    // receiving guardian notifications. A `Guardian` resource will also be created to represent the active guardian. The
                    // request object must have the `student_id` and `invited_email_address` fields set. Failing to set these fields, or
                    // setting any other fields in the request, will result in an error. This method returns the following error codes: *
                    // `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if the guardian in question has
                    // already rejected too many requests for that student, if guardians are not enabled for the domain in question, or for
                    // other access errors. * `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian link limit. *
                    // `INVALID_ARGUMENT` if the guardian email address is not valid (for example, if it is too long), or if the format of the
                    // student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API). This error will
                    // also be returned if read-only fields are set, or if the `state` field is set to to a value other than `PENDING`. *
                    // `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student. *
                    // `ALREADY_EXISTS` if there is already a pending guardian invitation for the student and `invited_email_address` provided,
                    // or if the provided `invited_email_address` matches the Google account of an existing `Guardian` for this user.
                    create(resource: Schema.GuardianInvitation, studentId: string): Schema.GuardianInvitation;
                    // Returns a specific guardian invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the
                    // requesting user is not permitted to view guardian invitations for the student identified by the `student_id`, if
                    // guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id`
                    // is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the
                    // literal string `me`). * `NOT_FOUND` if Classroom cannot find any record of the given student or `invitation_id`. May
                    // also be returned if the student exists, but the requesting user does not have access to see that student.
                    get(studentId: string, invitationId: string): Schema.GuardianInvitation;
                    // Returns a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters
                    // provided. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the
                    // requesting user is not permitted to view guardian invitations for that student, if `"-"` is specified as the
                    // `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, or for
                    // other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not
                    // an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid
                    // `page_token` or `state` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but
                    // Classroom has no record of that student.
                    list(studentId: string): Schema.ListGuardianInvitationsResponse;
                    // Returns a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters
                    // provided. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the
                    // requesting user is not permitted to view guardian invitations for that student, if `"-"` is specified as the
                    // `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, or for
                    // other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not
                    // an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid
                    // `page_token` or `state` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but
                    // Classroom has no record of that student.
                    list(studentId: string, optionalArgs: object): Schema.ListGuardianInvitationsResponse;
                    // Modifies a guardian invitation. Currently, the only valid modification is to change the `state` from `PENDING` to
                    // `COMPLETE`. This has the effect of withdrawing the invitation. This method returns the following error codes: *
                    // `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if guardians are not enabled for
                    // the domain in question or for other access errors. * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING`
                    // state. * `INVALID_ARGUMENT` if the format of the student ID provided cannot be recognized (it is not an email address,
                    // nor a `user_id` from this API), or if the passed `GuardianInvitation` has a `state` other than `COMPLETE`, or if it
                    // modifies fields other than `state`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no
                    // record of that student, or if the `id` field does not refer to a guardian invitation known to Classroom.
                    patch(resource: Schema.GuardianInvitation, studentId: string, invitationId: string): Schema.GuardianInvitation;
                    // Modifies a guardian invitation. Currently, the only valid modification is to change the `state` from `PENDING` to
                    // `COMPLETE`. This has the effect of withdrawing the invitation. This method returns the following error codes: *
                    // `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if guardians are not enabled for
                    // the domain in question or for other access errors. * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING`
                    // state. * `INVALID_ARGUMENT` if the format of the student ID provided cannot be recognized (it is not an email address,
                    // nor a `user_id` from this API), or if the passed `GuardianInvitation` has a `state` other than `COMPLETE`, or if it
                    // modifies fields other than `state`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no
                    // record of that student, or if the `id` field does not refer to a guardian invitation known to Classroom.
                    patch(resource: Schema.GuardianInvitation, studentId: string, invitationId: string, optionalArgs: object): Schema.GuardianInvitation;
                }
                interface GuardiansCollection {
                    // Returns a specific guardian. This method returns the following error codes: * `PERMISSION_DENIED` if no user that
                    // matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to view
                    // guardian information for the student identified by the `student_id`, if guardians are not enabled for the domain in
                    // question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be
                    // recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if
                    // the requesting user is permitted to view guardians for the requested `student_id`, but no `Guardian` record exists for
                    // that student that matches the provided `guardian_id`.
                    get(studentId: string, guardianId: string): Schema.Guardian;
                    // Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request.
                    // To list guardians for any student that the requesting user may view guardians for, use the literal character `-` for the
                    // student ID. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the
                    // requesting user is not permitted to view guardian information for that student, if `"-"` is specified as the
                    // `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, if the
                    // `invited_email_address` filter is set by a user who is not a domain administrator, or for other access errors. *
                    // `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor
                    // a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` is provided.
                    // * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that
                    // student.
                    list(studentId: string): Schema.ListGuardiansResponse;
                    // Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request.
                    // To list guardians for any student that the requesting user may view guardians for, use the literal character `-` for the
                    // student ID. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the
                    // requesting user is not permitted to view guardian information for that student, if `"-"` is specified as the
                    // `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, if the
                    // `invited_email_address` filter is set by a user who is not a domain administrator, or for other access errors. *
                    // `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor
                    // a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` is provided.
                    // * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that
                    // student.
                    list(studentId: string, optionalArgs: object): Schema.ListGuardiansResponse;
                    // Deletes a guardian. The guardian will no longer receive guardian notifications and the guardian will no longer be
                    // accessible via the API. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the
                    // provided `student_id` is visible to the requesting user, if the requesting user is not permitted to manage guardians for
                    // the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access
                    // errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email
                    // address, nor a `student_id` from the API). * `NOT_FOUND` if the requesting user is permitted to modify guardians for the
                    // requested `student_id`, but no `Guardian` record exists for that student with the provided `guardian_id`.
                    remove(studentId: string, guardianId: string): void;
                }
            }
            interface CoursesCollection {
                Aliases?: Collection.Courses.AliasesCollection;
                Announcements?: Collection.Courses.AnnouncementsCollection;
                CourseWork?: Collection.Courses.CourseWorkCollection;
                CourseWorkMaterials?: Collection.Courses.CourseWorkMaterialsCollection;
                Students?: Collection.Courses.StudentsCollection;
                Teachers?: Collection.Courses.TeachersCollection;
                Topics?: Collection.Courses.TopicsCollection;
                // Creates a course. The user specified in `ownerId` is the owner of the created course and added as a teacher. This method
                // returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create courses or
                // for access errors. * `NOT_FOUND` if the primary teacher is not a valid user. * `FAILED_PRECONDITION` if the course
                // owner's account is disabled or for the following request errors: * UserGroupsMembershipLimitReached * `ALREADY_EXISTS`
                // if an alias was specified in the `id` and already exists.
                create(resource: Schema.Course): Schema.Course;
                // Returns a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not
                // permitted to access the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
                get(id: string): Schema.Course;
                // Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request.
                // Returned courses are ordered by creation time, with the most recently created coming first. This method returns the
                // following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the query argument is malformed.
                // * `NOT_FOUND` if any users specified in the query arguments do not exist.
                list(): Schema.ListCoursesResponse;
                // Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request.
                // Returned courses are ordered by creation time, with the most recently created coming first. This method returns the
                // following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the query argument is malformed.
                // * `NOT_FOUND` if any users specified in the query arguments do not exist.
                list(optionalArgs: object): Schema.ListCoursesResponse;
                // Updates one or more fields in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the
                // requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists
                // with the requested ID. * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is
                // supplied. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable
                patch(resource: Schema.Course, id: string): Schema.Course;
                // Updates one or more fields in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the
                // requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists
                // with the requested ID. * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is
                // supplied. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable
                patch(resource: Schema.Course, id: string, optionalArgs: object): Schema.Course;
                // Deletes a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not
                // permitted to delete the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
                remove(id: string): void;
                // Updates a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not
                // permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
                // * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable
                update(resource: Schema.Course, id: string): Schema.Course;
            }
            interface InvitationsCollection {
                // Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the
                // specified course. Only the invited user may accept an invitation. This method returns the following error codes: *
                // `PERMISSION_DENIED` if the requesting user is not permitted to accept the requested invitation or for access errors. *
                // `FAILED_PRECONDITION` for the following request errors: * CourseMemberLimitReached * CourseNotModifiable *
                // CourseTeacherLimitReached * UserGroupsMembershipLimitReached * `NOT_FOUND` if no invitation exists with the requested
                // ID.
                accept(id: string): void;
                // Creates an invitation. Only one invitation for a user and course may exist at a time. Delete and re-create an invitation
                // to make changes. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not
                // permitted to create invitations for this course or for access errors. * `NOT_FOUND` if the course or the user does not
                // exist. * `FAILED_PRECONDITION` if the requested user's account is disabled or if the user already has this role or a
                // role with greater permissions. * `ALREADY_EXISTS` if an invitation for the specified user and course already exists.
                create(resource: Schema.Invitation): Schema.Invitation;
                // Returns an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is
                // not permitted to view the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the
                // requested ID.
                get(id: string): Schema.Invitation;
                // Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list
                // request. *Note:* At least one of `user_id` or `course_id` must be supplied. Both fields can be supplied. This method
                // returns the following error codes: * `PERMISSION_DENIED` for access errors.
                list(): Schema.ListInvitationsResponse;
                // Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list
                // request. *Note:* At least one of `user_id` or `course_id` must be supplied. Both fields can be supplied. This method
                // returns the following error codes: * `PERMISSION_DENIED` for access errors.
                list(optionalArgs: object): Schema.ListInvitationsResponse;
                // Deletes an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is
                // not permitted to delete the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the
                // requested ID.
                remove(id: string): void;
            }
            interface RegistrationsCollection {
                // Creates a `Registration`, causing Classroom to start sending notifications from the provided `feed` to the destination
                // provided in `cloudPubSubTopic`. Returns the created `Registration`. Currently, this will be the same as the argument,
                // but with server-assigned fields such as `expiry_time` and `id` filled in. Note that any value specified for the
                // `expiry_time` or `id` fields will be ignored. While Classroom may validate the `cloudPubSubTopic` and return errors on a
                // best effort basis, it is the caller's responsibility to ensure that it exists and that Classroom has permission to
                // publish to it. This method may return the following error codes: * `PERMISSION_DENIED` if: * the authenticated user does
                // not have permission to receive notifications from the requested field; or * the current user has not granted access to
                // the current Cloud project with the appropriate scope for the requested feed. Note that domain-wide delegation of
                // authority is not currently supported for this purpose. If the request has the appropriate scope, but no grant exists, a
                // Request Errors is returned. * another access error is encountered. * `INVALID_ARGUMENT` if: * no `cloudPubsubTopic` is
                // specified, or the specified `cloudPubsubTopic` is not valid; or * no `feed` is specified, or the specified `feed` is not
                // valid. * `NOT_FOUND` if: * the specified `feed` cannot be located, or the requesting user does not have permission to
                // determine whether or not it exists; or * the specified `cloudPubsubTopic` cannot be located, or Classroom has not been
                // granted permission to publish to it.
                create(resource: Schema.Registration): Schema.Registration;
                // Deletes a `Registration`, causing Classroom to stop sending notifications for that `Registration`.
                remove(registrationId: string): void;
            }
            interface UserProfilesCollection {
                GuardianInvitations?: Collection.UserProfiles.GuardianInvitationsCollection;
                Guardians?: Collection.UserProfiles.GuardiansCollection;
                // Returns a user profile. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is
                // not permitted to access this user profile, if no profile exists with the requested ID, or for access errors.
                get(userId: string): Schema.UserProfile;
            }
        }
        namespace Schema {
            // Announcement created by a teacher for students of the course
            interface Announcement {
                // Absolute link to this announcement in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.
                alternateLink?: string;
                // Assignee mode of the announcement. If unspecified, the default value is `ALL_STUDENTS`.
                assigneeMode?: string;
                // Identifier of the course. Read-only.
                courseId?: string;
                // Timestamp when this announcement was created. Read-only.
                creationTime?: string;
                // Identifier for the user that created the announcement. Read-only.
                creatorUserId?: string;
                // Classroom-assigned identifier of this announcement, unique per course. Read-only.
                id?: string;
                // Identifiers of students with access to the announcement. This field is set only if `assigneeMode` is
                // `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field can
                // see the announcement.
                individualStudentsOptions?: Schema.IndividualStudentsOptions;
                // Additional materials. Announcements must have no more than 20 material items.
                materials?: Schema.Material[];
                // Optional timestamp when this announcement is scheduled to be published.
                scheduledTime?: string;
                // Status of this announcement. If unspecified, the default state is `DRAFT`.
                state?: string;
                // Description of this announcement. The text must be a valid UTF-8 string containing no more than 30,000 characters.
                text?: string;
                // Timestamp of the most recent change to this announcement. Read-only.
                updateTime?: string;
            }
            // Additional details for assignments.
            interface Assignment {
                // Drive folder where attachments from student submissions are placed. This is only populated for course teachers and
                // administrators.
                studentWorkFolder?: Schema.DriveFolder;
            }
            // Student work for an assignment.
            interface AssignmentSubmission {
                // Attachments added by the student. Drive files that correspond to materials with a share mode of STUDENT_COPY may not
                // exist yet if the student has not accessed the assignment in Classroom. Some attachment metadata is only populated if the
                // requesting user has permission to access it. Identifier and alternate_link fields are always available, but others (for
                // example, title) may not be.
                attachments?: Schema.Attachment[];
            }
            // Attachment added to student assignment work. When creating attachments, setting the `form` field is not supported.
            interface Attachment {
                // Google Drive file attachment.
                driveFile?: Schema.DriveFile;
                // Google Forms attachment.
                form?: Schema.Form;
                // Link attachment.
                link?: Schema.Link;
                // Youtube video attachment.
                youTubeVideo?: Schema.YouTubeVideo;
            }
            // A reference to a Cloud Pub/Sub topic. To register for notifications, the owner of the topic must grant
            // `classroom-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
            interface CloudPubsubTopic {
                // The `name` field of a Cloud Pub/Sub
                // [Topic](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic).
                topicName?: string;
            }
            // A Course in Classroom.
            interface Course {
                // Absolute link to this course in the Classroom web UI. Read-only.
                alternateLink?: string;
                // The Calendar ID for a calendar that all course members can see, to which Classroom adds events for course work and
                // announcements in the course. Read-only.
                calendarId?: string;
                // The email address of a Google group containing all members of the course. This group does not accept email and can only
                // be used for permissions. Read-only.
                courseGroupEmail?: string;
                // Sets of materials that appear on the "about" page of this course. Read-only.
                courseMaterialSets?: Schema.CourseMaterialSet[];
                // State of the course. If unspecified, the default state is `PROVISIONED`.
                courseState?: string;
                // Creation time of the course. Specifying this field in a course update mask results in an error. Read-only.
                creationTime?: string;
                // Optional description. For example, "We'll be learning about the structure of living creatures from a combination of
                // textbooks, guest lectures, and lab work. Expect to be excited!" If set, this field must be a valid UTF-8 string and no
                // longer than 30,000 characters.
                description?: string;
                // Optional heading for the description. For example, "Welcome to 10th Grade Biology." If set, this field must be a valid
                // UTF-8 string and no longer than 3600 characters.
                descriptionHeading?: string;
                // Enrollment code to use when joining this course. Specifying this field in a course update mask results in an error.
                // Read-only.
                enrollmentCode?: string;
                // Whether or not guardian notifications are enabled for this course. Read-only.
                guardiansEnabled?: boolean;
                // Identifier for this course assigned by Classroom. When creating a course, you may optionally set this identifier to an
                // alias string in the request to create a corresponding alias. The `id` is still assigned by Classroom and cannot be
                // updated after the course is created. Specifying this field in a course update mask results in an error.
                id?: string;
                // Name of the course. For example, "10th Grade Biology". The name is required. It must be between 1 and 750 characters and
                // a valid UTF-8 string.
                name?: string;
                // The identifier of the owner of a course. When specified as a parameter of a create course request, this field is
                // required. The identifier can be one of the following: * the numeric identifier for the user * the email address of the
                // user * the string literal `"me"`, indicating the requesting user This must be set in a create request. Admins can also
                // specify this field in a patch course request to transfer ownership. In other contexts, it is read-only.
                ownerId?: string;
                // Optional room location. For example, "301". If set, this field must be a valid UTF-8 string and no longer than 650
                // characters.
                room?: string;
                // Section of the course. For example, "Period 2". If set, this field must be a valid UTF-8 string and no longer than 2800
                // characters.
                section?: string;
                // Information about a Drive Folder that is shared with all teachers of the course. This field will only be set for
                // teachers of the course and domain administrators. Read-only.
                teacherFolder?: Schema.DriveFolder;
                // The email address of a Google group containing all teachers of the course. This group does not accept email and can only
                // be used for permissions. Read-only.
                teacherGroupEmail?: string;
                // Time of the most recent update to this course. Specifying this field in a course update mask results in an error.
                // Read-only.
                updateTime?: string;
            }
            // Alternative identifier for a course. An alias uniquely identifies a course. It must be unique within one of the
            // following scopes: * domain: A domain-scoped alias is visible to all users within the alias creator's domain and can be
            // created only by a domain admin. A domain-scoped alias is often used when a course has an identifier external to
            // Classroom. * project: A project-scoped alias is visible to any request from an application using the Developer Console
            // project ID that created the alias and can be created by any project. A project-scoped alias is often used when an
            // application has alternative identifiers. A random value can also be used to avoid duplicate courses in the event of
            // transmission failures, as retrying a request will return `ALREADY_EXISTS` if a previous one has succeeded.
            interface CourseAlias {
                // Alias string. The format of the string indicates the desired alias scoping. * `d:` indicates a domain-scoped alias.
                // Example: `d:math_101` * `p:` indicates a project-scoped alias. Example: `p:abc123` This field has a maximum length of
                // 256 characters.
                alias?: string;
            }
            // A material attached to a course as part of a material set.
            interface CourseMaterial {
                // Google Drive file attachment.
                driveFile?: Schema.DriveFile;
                // Google Forms attachment.
                form?: Schema.Form;
                // Link atatchment.
                link?: Schema.Link;
                // Youtube video attachment.
                youTubeVideo?: Schema.YouTubeVideo;
            }
            // A set of materials that appears on the "About" page of the course. These materials might include a syllabus, schedule,
            // or other background information relating to the course as a whole.
            interface CourseMaterialSet {
                // Materials attached to this set.
                materials?: Schema.CourseMaterial[];
                // Title for this set.
                title?: string;
            }
            // Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`.
            interface CourseRosterChangesInfo {
                // The `course_id` of the course to subscribe to roster changes for.
                courseId?: string;
            }
            // Course work created by a teacher for students of the course.
            interface CourseWork {
                // Absolute link to this course work in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.
                alternateLink?: string;
                // Assignee mode of the coursework. If unspecified, the default value is `ALL_STUDENTS`.
                assigneeMode?: string;
                // Assignment details. This is populated only when `work_type` is `ASSIGNMENT`. Read-only.
                assignment?: Schema.Assignment;
                // Whether this course work item is associated with the Developer Console project making the request. See CreateCourseWork
                // for more details. Read-only.
                associatedWithDeveloper?: boolean;
                // Identifier of the course. Read-only.
                courseId?: string;
                // Timestamp when this course work was created. Read-only.
                creationTime?: string;
                // Identifier for the user that created the coursework. Read-only.
                creatorUserId?: string;
                // Optional description of this course work. If set, the description must be a valid UTF-8 string containing no more than
                // 30,000 characters.
                description?: string;
                // Optional date, in UTC, that submissions for this course work are due. This must be specified if `due_time` is specified.
                dueDate?: Schema.Date;
                // Optional time of day, in UTC, that submissions for this course work are due. This must be specified if `due_date` is
                // specified.
                dueTime?: Schema.TimeOfDay;
                // Classroom-assigned identifier of this course work, unique per course. Read-only.
                id?: string;
                // Identifiers of students with access to the coursework. This field is set only if `assigneeMode` is
                // `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field are
                // assigned the coursework.
                individualStudentsOptions?: Schema.IndividualStudentsOptions;
                // Additional materials. CourseWork must have no more than 20 material items.
                materials?: Schema.Material[];
                // Maximum grade for this course work. If zero or unspecified, this assignment is considered ungraded. This must be a
                // non-negative integer value.
                maxPoints?: number;
                // Multiple choice question details. For read operations, this field is populated only when `work_type` is
                // `MULTIPLE_CHOICE_QUESTION`. For write operations, this field must be specified when creating course work with a
                // `work_type` of `MULTIPLE_CHOICE_QUESTION`, and it must not be set otherwise.
                multipleChoiceQuestion?: Schema.MultipleChoiceQuestion;
                // Optional timestamp when this course work is scheduled to be published.
                scheduledTime?: string;
                // Status of this course work. If unspecified, the default state is `DRAFT`.
                state?: string;
                // Setting to determine when students are allowed to modify submissions. If unspecified, the default value is
                // `MODIFIABLE_UNTIL_TURNED_IN`.
                submissionModificationMode?: string;
                // Title of this course work. The title must be a valid UTF-8 string containing between 1 and 3000 characters.
                title?: string;
                // Identifier for the topic that this coursework is associated with. Must match an existing topic in the course.
                topicId?: string;
                // Timestamp of the most recent change to this course work. Read-only.
                updateTime?: string;
                // Type of this course work. The type is set when the course work is created and cannot be changed.
                workType?: string;
            }
            // Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`.
            interface CourseWorkChangesInfo {
                // The `course_id` of the course to subscribe to work changes for.
                courseId?: string;
            }
            // Course work material created by a teacher for students of the course
            interface CourseWorkMaterial {
                // Absolute link to this course work material in the Classroom web UI. This is only populated if `state` is `PUBLISHED`.
                // Read-only.
                alternateLink?: string;
                // Assignee mode of the course work material. If unspecified, the default value is `ALL_STUDENTS`.
                assigneeMode?: string;
                // Identifier of the course. Read-only.
                courseId?: string;
                // Timestamp when this course work material was created. Read-only.
                creationTime?: string;
                // Identifier for the user that created the course work material. Read-only.
                creatorUserId?: string;
                // Optional description of this course work material. The text must be a valid UTF-8 string containing no more than 30,000
                // characters.
                description?: string;
                // Classroom-assigned identifier of this course work material, unique per course. Read-only.
                id?: string;
                // Identifiers of students with access to the course work material. This field is set only if `assigneeMode` is
                // `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field can
                // see the course work material.
                individualStudentsOptions?: Schema.IndividualStudentsOptions;
                // Additional materials. A course work material must have no more than 20 material items.
                materials?: Schema.Material[];
                // Optional timestamp when this course work material is scheduled to be published.
                scheduledTime?: string;
                // Status of this course work material. If unspecified, the default state is `DRAFT`.
                state?: string;
                // Title of this course work material. The title must be a valid UTF-8 string containing between 1 and 3000 characters.
                title?: string;
                // Identifier for the topic that this course work material is associated with. Must match an existing topic in the course.
                topicId?: string;
                // Timestamp of the most recent change to this course work material. Read-only.
                updateTime?: string;
            }
            // Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified
            // elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
            // * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an
            // anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a
            // credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
            interface Date {
                // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and
                // month where the day isn't significant.
                day?: Integer;
                // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                month?: Integer;
                // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                year?: Integer;
            }
            // Representation of a Google Drive file.
            interface DriveFile {
                // URL that can be used to access the Drive item. Read-only.
                alternateLink?: string;
                // Drive API resource ID.
                id?: string;
                // URL of a thumbnail image of the Drive item. Read-only.
                thumbnailUrl?: string;
                // Title of the Drive item. Read-only.
                title?: string;
            }
            // Representation of a Google Drive folder.
            interface DriveFolder {
                // URL that can be used to access the Drive folder. Read-only.
                alternateLink?: string;
                // Drive API resource ID.
                id?: string;
                // Title of the Drive folder. Read-only.
                title?: string;
            }
            // A class of notifications that an application can register to receive. For example: "all roster changes for a domain".
            interface Feed {
                // Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`. This field must be specified if `feed_type` is
                // `COURSE_ROSTER_CHANGES`.
                courseRosterChangesInfo?: Schema.CourseRosterChangesInfo;
                // Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`. This field must be specified if `feed_type` is
                // `COURSE_WORK_CHANGES`.
                courseWorkChangesInfo?: Schema.CourseWorkChangesInfo;
                // The type of feed.
                feedType?: string;
            }
            // Google Forms item.
            interface Form {
                // URL of the form.
                formUrl?: string;
                // URL of the form responses document. Only set if respsonses have been recorded and only when the requesting user is an
                // editor of the form. Read-only.
                responseUrl?: string;
                // URL of a thumbnail image of the Form. Read-only.
                thumbnailUrl?: string;
                // Title of the Form. Read-only.
                title?: string;
            }
            // Global user permission description.
            interface GlobalPermission {
                // Permission value.
                permission?: string;
            }
            // The history of each grade on this submission.
            interface GradeHistory {
                // The teacher who made the grade change.
                actorUserId?: string;
                // The type of grade change at this time in the submission grade history.
                gradeChangeType?: string;
                // When the grade of the submission was changed.
                gradeTimestamp?: string;
                // The denominator of the grade at this time in the submission grade history.
                maxPoints?: number;
                // The numerator of the grade at this time in the submission grade history.
                pointsEarned?: number;
            }
            // Association between a student and a guardian of that student. The guardian may receive information about the student's
            // course work.
            interface Guardian {
                // Identifier for the guardian.
                guardianId?: string;
                // User profile for the guardian.
                guardianProfile?: Schema.UserProfile;
                // The email address to which the initial guardian invitation was sent. This field is only visible to domain
                // administrators.
                invitedEmailAddress?: string;
                // Identifier for the student to whom the guardian relationship applies.
                studentId?: string;
            }
            // An invitation to become the guardian of a specified user, sent to a specified email address.
            interface GuardianInvitation {
                // The time that this invitation was created. Read-only.
                creationTime?: string;
                // Unique identifier for this invitation. Read-only.
                invitationId?: string;
                // Email address that the invitation was sent to. This field is only visible to domain administrators.
                invitedEmailAddress?: string;
                // The state that this invitation is in.
                state?: string;
                // ID of the student (in standard format)
                studentId?: string;
            }
            // Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is
            // `INDIVIDUAL_STUDENTS`.
            interface IndividualStudentsOptions {
                // Identifiers for the students that have access to the coursework/announcement.
                studentIds?: string[];
            }
            // An invitation to join a course.
            interface Invitation {
                // Identifier of the course to invite the user to.
                courseId?: string;
                // Identifier assigned by Classroom. Read-only.
                id?: string;
                // Role to invite the user to have. Must not be `COURSE_ROLE_UNSPECIFIED`.
                role?: string;
                // Identifier of the invited user. When specified as a parameter of a request, this identifier can be set to one of the
                // following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating
                // the requesting user
                userId?: string;
            }
            // URL item.
            interface Link {
                // URL of a thumbnail image of the target URL. Read-only.
                thumbnailUrl?: string;
                // Title of the target of the URL. Read-only.
                title?: string;
                // URL to link to. This must be a valid UTF-8 string containing between 1 and 2024 characters.
                url?: string;
            }
            // Response when listing course work.
            interface ListAnnouncementsResponse {
                // Announcement items that match the request.
                announcements?: Schema.Announcement[];
                // Token identifying the next page of results to return. If empty, no further results are available.
                nextPageToken?: string;
            }
            // Response when listing course aliases.
            interface ListCourseAliasesResponse {
                // The course aliases.
                aliases?: Schema.CourseAlias[];
                // Token identifying the next page of results to return. If empty, no further results are available.
                nextPageToken?: string;
            }
            // Response when listing course work material.
            interface ListCourseWorkMaterialResponse {
                // Course work material items that match the request.
                courseWorkMaterial?: Schema.CourseWorkMaterial[];
                // Token identifying the next page of results to return. If empty, no further results are available.
                nextPageToken?: string;
            }
            // Response when listing course work.
            interface ListCourseWorkResponse {
                // Course work items that match the request.
                courseWork?: Schema.CourseWork[];
                // Token identifying the next page of results to return. If empty, no further results are available.
                nextPageToken?: string;
            }
            // Response when listing courses.
            interface ListCoursesResponse {
                // Courses that match the list request.
                courses?: Schema.Course[];
                // Token identifying the next page of results to return. If empty, no further results are available.
                nextPageToken?: string;
            }
            // Response when listing guardian invitations.
            interface ListGuardianInvitationsResponse {
                // Guardian invitations that matched the list request.
                guardianInvitations?: Schema.GuardianInvitation[];
                // Token identifying the next page of results to return. If empty, no further results are available.
                nextPageToken?: string;
            }
            // Response when listing guardians.
            interface ListGuardiansResponse {
                // Guardians on this page of results that met the criteria specified in the request.
                guardians?: Schema.Guardian[];
                // Token identifying the next page of results to return. If empty, no further results are available.
                nextPageToken?: string;
            }
            // Response when listing invitations.
            interface ListInvitationsResponse {
                // Invitations that match the list request.
                invitations?: Schema.Invitation[];
                // Token identifying the next page of results to return. If empty, no further results are available.
                nextPageToken?: string;
            }
            // Response when listing student submissions.
            interface ListStudentSubmissionsResponse {
                // Token identifying the next page of results to return. If empty, no further results are available.
                nextPageToken?: string;
                // Student work that matches the request.
                studentSubmissions?: Schema.StudentSubmission[];
            }
            // Response when listing students.
            interface ListStudentsResponse {
                // Token identifying the next page of results to return. If empty, no further results are available.
                nextPageToken?: string;
                // Students who match the list request.
                students?: Schema.Student[];
            }
            // Response when listing teachers.
            interface ListTeachersResponse {
                // Token identifying the next page of results to return. If empty, no further results are available.
                nextPageToken?: string;
                // Teachers who match the list request.
                teachers?: Schema.Teacher[];
            }
            // Response when listing topics.
            interface ListTopicResponse {
                // Token identifying the next page of results to return. If empty, no further results are available.
                nextPageToken?: string;
                // Topic items that match the request.
                topic?: Schema.Topic[];
            }
            // Material attached to course work. When creating attachments, setting the `form` field is not supported.
            interface Material {
                // Google Drive file material.
                driveFile?: Schema.SharedDriveFile;
                // Google Forms material.
                form?: Schema.Form;
                // Link material. On creation, this is upgraded to a more appropriate type if possible, and this is reflected in the
                // response.
                link?: Schema.Link;
                // YouTube video material.
                youtubeVideo?: Schema.YouTubeVideo;
            }
            // Request to modify assignee mode and options of an announcement.
            interface ModifyAnnouncementAssigneesRequest {
                // Mode of the announcement describing whether it is accessible by all students or specified individual students.
                assigneeMode?: string;
                // Set which students can view or cannot view the announcement. Must be specified only when `assigneeMode` is
                // `INDIVIDUAL_STUDENTS`.
                modifyIndividualStudentsOptions?: Schema.ModifyIndividualStudentsOptions;
            }
            // Request to modify the attachments of a student submission.
            interface ModifyAttachmentsRequest {
                // Attachments to add. A student submission may not have more than 20 attachments. Form attachments are not supported.
                addAttachments?: Schema.Attachment[];
            }
            // Request to modify assignee mode and options of a coursework.
            interface ModifyCourseWorkAssigneesRequest {
                // Mode of the coursework describing whether it will be assigned to all students or specified individual students.
                assigneeMode?: string;
                // Set which students are assigned or not assigned to the coursework. Must be specified only when `assigneeMode` is
                // `INDIVIDUAL_STUDENTS`.
                modifyIndividualStudentsOptions?: Schema.ModifyIndividualStudentsOptions;
            }
            // Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to
            // `INDIVIDUAL_STUDENTS`.
            interface ModifyIndividualStudentsOptions {
                // IDs of students to be added as having access to this coursework/announcement.
                addStudentIds?: string[];
                // IDs of students to be removed from having access to this coursework/announcement.
                removeStudentIds?: string[];
            }
            // Additional details for multiple-choice questions.
            interface MultipleChoiceQuestion {
                // Possible choices.
                choices?: string[];
            }
            // Student work for a multiple-choice question.
            interface MultipleChoiceSubmission {
                // Student's select choice.
                answer?: string;
            }
            // Details of the user's name.
            interface Name {
                // The user's last name. Read-only.
                familyName?: string;
                // The user's full name formed by concatenating the first and last name values. Read-only.
                fullName?: string;
                // The user's first name. Read-only.
                givenName?: string;
            }
            // An instruction to Classroom to send notifications from the `feed` to the provided destination.
            interface Registration {
                // The Cloud Pub/Sub topic that notifications are to be sent to.
                cloudPubsubTopic?: Schema.CloudPubsubTopic;
                // The time until which the `Registration` is effective. This is a read-only field assigned by the server.
                expiryTime?: string;
                // Specification for the class of notifications that Classroom should deliver to the destination.
                feed?: Schema.Feed;
                // A server-generated unique identifier for this `Registration`. Read-only.
                registrationId?: string;
            }
            // Drive file that is used as material for course work.
            interface SharedDriveFile {
                // Drive file details.
                driveFile?: Schema.DriveFile;
                // Mechanism by which students access the Drive item.
                shareMode?: string;
            }
            // Student work for a short answer question.
            interface ShortAnswerSubmission {
                // Student response to a short-answer question.
                answer?: string;
            }
            // The history of each state this submission has been in.
            interface StateHistory {
                // The teacher or student who made the change.
                actorUserId?: string;
                // The workflow pipeline stage.
                state?: string;
                // When the submission entered this state.
                stateTimestamp?: string;
            }
            // Student in a course.
            interface Student {
                // Identifier of the course. Read-only.
                courseId?: string;
                // Global user information for the student. Read-only.
                profile?: Schema.UserProfile;
                // Information about a Drive Folder for this student's work in this course. Only visible to the student and domain
                // administrators. Read-only.
                studentWorkFolder?: Schema.DriveFolder;
                // Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the
                // numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting
                // user
                userId?: string;
            }
            // Student submission for course work. StudentSubmission items are generated when a CourseWork item is created.
            // StudentSubmissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time.
            interface StudentSubmission {
                // Absolute link to the submission in the Classroom web UI. Read-only.
                alternateLink?: string;
                // Optional grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are
                // allowed, but are rounded to two decimal places. This may be modified only by course teachers.
                assignedGrade?: number;
                // Submission content when course_work_type is ASSIGNMENT. Students can modify this content using ModifyAttachments.
                assignmentSubmission?: Schema.AssignmentSubmission;
                // Whether this student submission is associated with the Developer Console project making the request. See
                // CreateCourseWork for more details. Read-only.
                associatedWithDeveloper?: boolean;
                // Identifier of the course. Read-only.
                courseId?: string;
                // Identifier for the course work this corresponds to. Read-only.
                courseWorkId?: string;
                // Type of course work this submission is for. Read-only.
                courseWorkType?: string;
                // Creation time of this submission. This may be unset if the student has not accessed this item. Read-only.
                creationTime?: string;
                // Optional pending grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer)
                // values are allowed, but are rounded to two decimal places. This is only visible to and modifiable by course teachers.
                draftGrade?: number;
                // Classroom-assigned Identifier for the student submission. This is unique among submissions for the relevant course work.
                // Read-only.
                id?: string;
                // Whether this submission is late. Read-only.
                late?: boolean;
                // Submission content when course_work_type is MULTIPLE_CHOICE_QUESTION.
                multipleChoiceSubmission?: Schema.MultipleChoiceSubmission;
                // Submission content when course_work_type is SHORT_ANSWER_QUESTION.
                shortAnswerSubmission?: Schema.ShortAnswerSubmission;
                // State of this submission. Read-only.
                state?: string;
                // The history of the submission (includes state and grade histories). Read-only.
                submissionHistory?: Schema.SubmissionHistory[];
                // Last update time of this submission. This may be unset if the student has not accessed this item. Read-only.
                updateTime?: string;
                // Identifier for the student that owns this submission. Read-only.
                userId?: string;
            }
            // The history of the submission. This currently includes state and grade histories.
            interface SubmissionHistory {
                // The grade history information of the submission, if present.
                gradeHistory?: Schema.GradeHistory;
                // The state history information of the submission, if present.
                stateHistory?: Schema.StateHistory;
            }
            // Teacher of a course.
            interface Teacher {
                // Identifier of the course. Read-only.
                courseId?: string;
                // Global user information for the teacher. Read-only.
                profile?: Schema.UserProfile;
                // Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the
                // numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting
                // user
                userId?: string;
            }
            // Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may
            // choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
            interface TimeOfDay {
                // Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios
                // like business closing time.
                hours?: Integer;
                // Minutes of hour of day. Must be from 0 to 59.
                minutes?: Integer;
                // Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                nanos?: Integer;
                // Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                seconds?: Integer;
            }
            // Topic created by a teacher for the course
            interface Topic {
                // Identifier of the course. Read-only.
                courseId?: string;
                // The name of the topic, generated by the user. Leading and trailing whitespaces, if any, are trimmed. Also, multiple
                // consecutive whitespaces are collapsed into one inside the name. The result must be a non-empty string. Topic names are
                // case sensitive, and must be no longer than 100 characters.
                name?: string;
                // Unique identifier for the topic. Read-only.
                topicId?: string;
                // The time the topic was last updated by the system. Read-only.
                updateTime?: string;
            }
            // Global information for a user.
            interface UserProfile {
                // Email address of the user. Read-only.
                emailAddress?: string;
                // Identifier of the user. Read-only.
                id?: string;
                // Name of the user. Read-only.
                name?: Schema.Name;
                // Global permissions of the user. Read-only.
                permissions?: Schema.GlobalPermission[];
                // URL of user's profile photo. Read-only.
                photoUrl?: string;
                // Represents whether a G Suite for Education user's domain administrator has explicitly verified them as being a teacher.
                // If the user is not a member of a G Suite for Education domain, than this field is always false. Read-only
                verifiedTeacher?: boolean;
            }
            // YouTube video item.
            interface YouTubeVideo {
                // URL that can be used to view the YouTube video. Read-only.
                alternateLink?: string;
                // YouTube API resource ID.
                id?: string;
                // URL of a thumbnail image of the YouTube video. Read-only.
                thumbnailUrl?: string;
                // Title of the YouTube video. Read-only.
                title?: string;
            }
        }
    }
    // Manages classes, rosters, and invitations in Google Classroom.
    interface Classroom {
        Courses?: Classroom.Collection.CoursesCollection;
        Invitations?: Classroom.Collection.InvitationsCollection;
        Registrations?: Classroom.Collection.RegistrationsCollection;
        UserProfiles?: Classroom.Collection.UserProfilesCollection;
        // Create a new instance of Announcement
        newAnnouncement(): Classroom.Schema.Announcement;
        // Create a new instance of Assignment
        newAssignment(): Classroom.Schema.Assignment;
        // Create a new instance of AssignmentSubmission
        newAssignmentSubmission(): Classroom.Schema.AssignmentSubmission;
        // Create a new instance of Attachment
        newAttachment(): Classroom.Schema.Attachment;
        // Create a new instance of CloudPubsubTopic
        newCloudPubsubTopic(): Classroom.Schema.CloudPubsubTopic;
        // Create a new instance of Course
        newCourse(): Classroom.Schema.Course;
        // Create a new instance of CourseAlias
        newCourseAlias(): Classroom.Schema.CourseAlias;
        // Create a new instance of CourseMaterial
        newCourseMaterial(): Classroom.Schema.CourseMaterial;
        // Create a new instance of CourseMaterialSet
        newCourseMaterialSet(): Classroom.Schema.CourseMaterialSet;
        // Create a new instance of CourseRosterChangesInfo
        newCourseRosterChangesInfo(): Classroom.Schema.CourseRosterChangesInfo;
        // Create a new instance of CourseWork
        newCourseWork(): Classroom.Schema.CourseWork;
        // Create a new instance of CourseWorkChangesInfo
        newCourseWorkChangesInfo(): Classroom.Schema.CourseWorkChangesInfo;
        // Create a new instance of CourseWorkMaterial
        newCourseWorkMaterial(): Classroom.Schema.CourseWorkMaterial;
        // Create a new instance of Date
        newDate(): Classroom.Schema.Date;
        // Create a new instance of DriveFile
        newDriveFile(): Classroom.Schema.DriveFile;
        // Create a new instance of DriveFolder
        newDriveFolder(): Classroom.Schema.DriveFolder;
        // Create a new instance of Feed
        newFeed(): Classroom.Schema.Feed;
        // Create a new instance of Form
        newForm(): Classroom.Schema.Form;
        // Create a new instance of GlobalPermission
        newGlobalPermission(): Classroom.Schema.GlobalPermission;
        // Create a new instance of GradeHistory
        newGradeHistory(): Classroom.Schema.GradeHistory;
        // Create a new instance of GuardianInvitation
        newGuardianInvitation(): Classroom.Schema.GuardianInvitation;
        // Create a new instance of IndividualStudentsOptions
        newIndividualStudentsOptions(): Classroom.Schema.IndividualStudentsOptions;
        // Create a new instance of Invitation
        newInvitation(): Classroom.Schema.Invitation;
        // Create a new instance of Link
        newLink(): Classroom.Schema.Link;
        // Create a new instance of Material
        newMaterial(): Classroom.Schema.Material;
        // Create a new instance of ModifyAnnouncementAssigneesRequest
        newModifyAnnouncementAssigneesRequest(): Classroom.Schema.ModifyAnnouncementAssigneesRequest;
        // Create a new instance of ModifyAttachmentsRequest
        newModifyAttachmentsRequest(): Classroom.Schema.ModifyAttachmentsRequest;
        // Create a new instance of ModifyCourseWorkAssigneesRequest
        newModifyCourseWorkAssigneesRequest(): Classroom.Schema.ModifyCourseWorkAssigneesRequest;
        // Create a new instance of ModifyIndividualStudentsOptions
        newModifyIndividualStudentsOptions(): Classroom.Schema.ModifyIndividualStudentsOptions;
        // Create a new instance of MultipleChoiceQuestion
        newMultipleChoiceQuestion(): Classroom.Schema.MultipleChoiceQuestion;
        // Create a new instance of MultipleChoiceSubmission
        newMultipleChoiceSubmission(): Classroom.Schema.MultipleChoiceSubmission;
        // Create a new instance of Name
        newName(): Classroom.Schema.Name;
        // Create a new instance of ReclaimStudentSubmissionRequest
        newReclaimStudentSubmissionRequest(): any;
        // Create a new instance of Registration
        newRegistration(): Classroom.Schema.Registration;
        // Create a new instance of ReturnStudentSubmissionRequest
        newReturnStudentSubmissionRequest(): any;
        // Create a new instance of SharedDriveFile
        newSharedDriveFile(): Classroom.Schema.SharedDriveFile;
        // Create a new instance of ShortAnswerSubmission
        newShortAnswerSubmission(): Classroom.Schema.ShortAnswerSubmission;
        // Create a new instance of StateHistory
        newStateHistory(): Classroom.Schema.StateHistory;
        // Create a new instance of Student
        newStudent(): Classroom.Schema.Student;
        // Create a new instance of StudentSubmission
        newStudentSubmission(): Classroom.Schema.StudentSubmission;
        // Create a new instance of SubmissionHistory
        newSubmissionHistory(): Classroom.Schema.SubmissionHistory;
        // Create a new instance of Teacher
        newTeacher(): Classroom.Schema.Teacher;
        // Create a new instance of TimeOfDay
        newTimeOfDay(): Classroom.Schema.TimeOfDay;
        // Create a new instance of Topic
        newTopic(): Classroom.Schema.Topic;
        // Create a new instance of TurnInStudentSubmissionRequest
        newTurnInStudentSubmissionRequest(): any;
        // Create a new instance of UserProfile
        newUserProfile(): Classroom.Schema.UserProfile;
        // Create a new instance of YouTubeVideo
        newYouTubeVideo(): Classroom.Schema.YouTubeVideo;
    }
}
declare const Classroom: GoogleAppsScript.Classroom;
