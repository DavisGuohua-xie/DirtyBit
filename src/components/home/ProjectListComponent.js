import React from 'react';


import ProjectList from './ProjectList';
import { Button, Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ProjectListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projItems: props.projects,
            newProjectModalOpen: false,
            newProjectName: '',
            newProjectMembers: '' // TODO: handle adding new project members to project on creation
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleCreateProject = this.handleCreateProject.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }


    toggleModal() {
        this.setState({newProjectModalOpen: !this.state.newProjectModalOpen});
    }

    handleCreateProject() {
        // todo: projActions
        console.log("project name: " + this.state.newProjectName);
        console.log("TODO: create project")
    }

    handleNameChange(e) {
        this.setState({newProjectName: e.target.value});
    }

    render() {

        return <div>
                <Modal isOpen={this.state.newProjectModalOpen} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal}> Create New Project </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="projectName">Project Name</Label>
                                <Input type="text" name="projectnameinput" id="projectName" placeholder="Agility" onChange={this.handleNameChange}/> 
                            </FormGroup>
                            <FormGroup>
                                <Label for="addMembers">Add Members</Label>
                                <Input type="text" name="addmembersinput" id="addMembers" placeholder="TODO: functionality not yet implemented" /> 
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleCreateProject}>Create Project</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <ProjectList 
                    projects={this.state.projItems}
                    onNewProject={this.toggleModal}
                    onEnterProject={this.handleEnterProject}
                />
                </div>;
    }

};