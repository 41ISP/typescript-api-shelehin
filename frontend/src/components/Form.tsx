import type { ChangeEvent, Dispatch, FormEvent } from "react"
import type { ICreateUsersRequest } from "../types"

export interface IFormData extends ICreateUsersRequest {}

export interface IFormProps {
    handleSubmit: (e: FormEvent) => void,
    formData: IFormData,
    setFormData: Dispatch<React.SetStateAction<IFormData>>}

export const Form = ({handleSubmit, formData, setFormData}: IFormProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData(old => ({...old, [name]: value}))
    }

    return (
        <section className="form-section">
                    <h2>Add New User</h2>
                    <form onSubmit={handleSubmit} className="user-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                            onChange={handleChange}
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                value={
                                    formData.name
                                }
                                name="name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                            onChange={handleChange}
                                type="email"
                                id="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                name="email"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Create User
                        </button>
                    </form>
                </section>
    )
}