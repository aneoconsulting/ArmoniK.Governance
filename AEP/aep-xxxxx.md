ArmoniK inputs (from storage module outputs)

```tf
variable "control_plane_env" {
    description = "Environment variables to pass to the control plane"
    type        = map(string)
    default     = {}
    // Example:
    // {
    //   "Components__QueueAdaptorSettings__AdapterAbsolutePath" = "/adapters/queue/amqp/ArmoniK.Core.Adapters.Amqp.dll"
    // }
}


variable "control_plane_env_cm" {
    description = "Environment variables from existing config map to pass to the control plane"
    type        = set(string)
    default     = []
    // Example:
    // [
    //   "amqp-cm"
    // ]
    // 
    // amqp-cm:
    //   Amqp__MaxRetries: 5
    //   Amqp__LinkCredit: 2
}

variable "control_plane_env_secret" {
    description = "Environment variables from existing secret to pass to the control plane"
    type        = set(string)
    default     = []
    // Example:
    // [
    //   "amqp-secret"
    // ]
    // 
    // amqp-secret:
    //   Amqp__Host: amqp.svc
    //   Amqp__Scheme: AMQPS
    //   Amqp__AllowHostMismatch: true
}

variable "control_plane_env_from_secret" {
    description = "Environment variables from existing secret to pass to the control plane"
    type        = map(object({
        secret = string
        field  = string
    }))
    default = {}
    // Example:
    // {
    //   "Amqp__User" = {
    //     secret = "amqp-credentials"
    //     field  = "user"
    //   },
    //   "Amqp__Password" = {
    //     secret = "amqp-credentials"
    //     field  = "password"
    //   }
    // }
    //
    // amqp-credentials:
    //   user: dG90bw==
    //   password: dG90bw==
}

variable "control_plane_mount_cm" {
    description = "Volume mount from ConfigMap to pass to the control plane"
    type        = map(object({
        configmap = string
        path      = string
        subpath   = optional(string)
        mode      = optional(string, "644")
        items = map(object({
            mode  = optional(string, "644")
            field = string
        }))
    }))
    default = {}
}

variable "control_plane_mount_secret" {
    description = "Volume mount from Secret to pass to the control plane"
    type        = map(object({
        secret  = string
        path    = string
        subpath = optional(string)
        mode    = optional(string, "644")
        items = map(object({
            mode  = optional(string, "644")
            field = string
        }))
    }))
    default = {}
    // Example:
    // {
    //   "amqp-certificates" = {
    //     secret  = "amqp-certs"
    //     path    = "/amqp"
    //     subpath = null
    //     mode    = "600"
    //     items = {
    //       "amqp.pem" = {
    //          mode  = "600"
    //          field = "ca.crt"
    //       }
    //     }
    //   }
    // }
    // 
    // amqp-certificates:
    //   ca.crt: BASE64==
    //
    // /amqp
    // └── amqp.pem
}


variable "control_plane_mount_volume" {
    type = ToBeDefined
}
variable "control_plane_mount_volume_claim" {
    type = ToBeDefined
}
```